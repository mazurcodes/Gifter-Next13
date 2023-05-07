'use client';
import AuthFormCompleted from '@/components/AuthFormCompleted';
import AuthFormRegister from '@/components/AuthRegister';
import { auth } from '@/firebase/clientApp';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';

const SignupPage = () => {
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
        <AuthFormRegister />
        <Link href="/login" className="p-4">
          Already a member? Click here to Login.
        </Link>
      </>
    );

  return <AuthFormCompleted email={user?.email} />;
};

export default SignupPage;
