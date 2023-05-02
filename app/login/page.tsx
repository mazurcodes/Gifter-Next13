'use client';
import AuthFormCompleted from '@/components/AuthFormCompleted';
import AuthFormLogin from '@/components/AuthFormLogin';
import { auth } from '@/firebase/clientApp';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';

const LoginPage = () => {
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
        <AuthFormLogin />
        <Link href="/signup">Not a member? Click here to Sign up.</Link>
      </>
    );

  return <AuthFormCompleted email={user?.email} />;
};

export default LoginPage;
