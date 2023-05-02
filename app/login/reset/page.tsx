'use client';
import AuthFormCompleted from '@/components/AuthFormCompleted';
import AuthFormReset from '@/components/AuthFormReset';
import { auth } from '@/firebase/clientApp';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';

const ResetPasswordPage = () => {
  const [user, loadingAuth, errorAuth] = useAuthState(auth);

  if (loadingAuth) {
    return <p>Checking user...</p>;
  }

  if (errorAuth) {
    return (
      <p>
        There was some error:{' '}
        <span className="text-red-600">{errorAuth.message}</span>
      </p>
    );
  }

  if (!user)
    return (
      <>
        <AuthFormReset />
        <Link href="/login">I remember! Let&apos;s login.</Link>
      </>
    );

  return <AuthFormCompleted email={user?.email} />;
};

export default ResetPasswordPage;
