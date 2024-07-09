'use client';

import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

import { Button } from '@/components/ui/button';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export function Social() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, { callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT });
  };

  return (
    <div className="w-full flex items-center gap-x-2">
      <Button
        className="w-full"
        size="lg"
        variant="outline"
        onClick={() => onClick('google')}
      >
        <FcGoogle />
      </Button>
      <Button
        className="w-full"
        size="lg"
        variant="outline"
        onClick={() => onClick('github')}
      >
        <FaGithub />
      </Button>
    </div>
  );
}
