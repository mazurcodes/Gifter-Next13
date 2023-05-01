'use client';
import { useState } from 'react';
import {
  AuthError,
  UserCredential,
  User,
  ActionCodeSettings,
} from 'firebase/auth';
import AuthFormLogin from '@/components/AuthFormLogin';
import AuthFormCompleted from '@/components/AuthFormCompleted';
import AuthFormRegister from '@/components/AuthRegister';
import AuthFormReset from '../AuthFormReset';

type AuthFormPresenterProps = {
  data: {
    user: User | null | undefined;
    loadingAuth: boolean;
    loadingLogin: boolean;
    loadingSignup: boolean;
    sendingReset: boolean;
    errorAuth: Error | undefined;
    errorLogin: AuthError | undefined;
    errorSignup: AuthError | undefined;
    errorReset: Error | AuthError | undefined;
    loginFn: (
      email: string,
      password: string
    ) => Promise<UserCredential | undefined>;
    signupFn: (
      email: string,
      password: string
    ) => Promise<UserCredential | undefined>;
    resetFn: (
      email: string,
      actionCodeSettings?: ActionCodeSettings | undefined
    ) => Promise<boolean>;
  };
};

const AuthFormPresenter = ({ data }: AuthFormPresenterProps) => {
  const {
    user,
    loadingAuth,
    loadingLogin,
    loadingSignup,
    sendingReset,
    errorAuth,
    errorLogin,
    errorSignup,
    errorReset,
    loginFn,
    signupFn,
    resetFn,
  } = data;

  const [isLoginUI, setLoginUI] = useState(false);
  const [isResetUI, setResetUI] = useState(false);

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

  //TODO: move button login/signup UI to the AuthFormLogin/Signup components

  if (!user && isLoginUI && !isResetUI)
    return (
      <>
        <AuthFormLogin
          loginFn={loginFn}
          loading={loadingLogin}
          error={errorLogin}
          reset={setResetUI}
        />
        <button
          className="p-2 text-gray-500"
          onClick={() => setLoginUI(!isLoginUI)}
        >
          Not a member? Click here to Sign up.
        </button>
      </>
    );
  if (!user && !isLoginUI && !isResetUI)
    return (
      <>
        <AuthFormRegister
          signupFn={signupFn}
          loading={loadingSignup}
          error={errorSignup}
        />
        <button
          className="p-2 text-gray-500"
          onClick={() => setLoginUI(!isLoginUI)}
        >
          Already a member? Click here to Login.
        </button>
      </>
    );

  if (isResetUI)
    return (
      <>
        <AuthFormReset
          resetFn={resetFn}
          sending={sendingReset}
          error={errorReset}
        />
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

export default AuthFormPresenter;
