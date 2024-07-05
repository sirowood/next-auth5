import { CardWrapper } from '@/components/auth/card-wrapper';
import { ResetForm } from '@/components/auth/reset-form';

export default function ResetPage() {
  return (
    <CardWrapper
      headerLabel="Forgot your password?"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
      showSocial={false}
    >
      <ResetForm />
    </CardWrapper>
  );
}
