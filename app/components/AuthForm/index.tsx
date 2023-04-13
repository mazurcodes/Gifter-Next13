'use client';

import { useState } from 'react';
import { auth } from '@/firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import AuthFormLogin from '@/components/AuthFormLogin';
import AuthFormSignUp from '@/components/AuthFormSignUp';
import AuthFormCompleted from '@/components/AuthFormCompleted';

const AuthForm = () => {
  const [isLoginUI, setLoginUI] = useState(false);

  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <p>Checking user...</p>;
  }

  if (error) {
    return (
      <p>
        There was some error:{' '}
        <span className="text-red-600">{error.message}</span>
      </p>
    );
  }

  if (!user && isLoginUI)
    return (
      <>
        <AuthFormLogin />
        <button
          className="p-2 text-gray-500"
          onClick={() => setLoginUI(!isLoginUI)}
        >
          Not a member? Click here to Sign up.
        </button>
      </>
    );
  if (!user && !isLoginUI)
    return (
      <>
        <AuthFormSignUp />
        <button
          className="p-2 text-gray-500"
          onClick={() => setLoginUI(!isLoginUI)}
        >
          Already a member? Click here to Login.
        </button>
      </>
    );

  return <AuthFormCompleted email={user?.email} />;
};

export default AuthForm;
