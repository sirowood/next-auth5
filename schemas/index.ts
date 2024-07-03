import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'At least 8 characters'),
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'At least 8 characters'),
  name: z.string().min(2, 'At least 2 characters'),
});
