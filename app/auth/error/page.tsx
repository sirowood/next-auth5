import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

import { CardWrapper } from '@/components/auth/card-wrapper';

export default function ErrorPage() {
  return (
    <CardWrapper
      headerLabel="Oops! Somthing went wrong!"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
      showSocial={false}
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="w-4 h-4 text-destructive" />
      </div>
    </CardWrapper>
  );
}
