import { CardWrapper } from '@/components/auth/card-wrapper';
import { NewPasswordForm } from '@/components/auth/new-password-form';

export default function NewPasswordPage() {
  return (
    <CardWrapper
      headerLabel="Enter new password"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
      showSocial={false}
    >
      <NewPasswordForm />
    </CardWrapper>
  );
}
