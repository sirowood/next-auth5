'use server';

import * as z from 'zod';
import { AuthError } from 'next-auth';

import { LoginSchema } from '@/schemas';
import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerificationEmail } from '@/lib/mail';

export async function login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: 'Invalid fields!',
    };
  }

  const { email, password } = values;

  const existingUser = await getUserByEmail(email);

  // TODO: Investigate if this logic should be here or exists
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return {
      error: 'Email does not exist!',
    };
  }

  // TODO: Even input wrong password, the system will still send verification email
  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(email);

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return {
      success: 'Confirmation email sent!',
    };
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            error: 'Invalid credentials!',
          };
        default:
          return {
            error: 'Something went wrong!',
          };
      }
    }

    throw error;
  }
}
