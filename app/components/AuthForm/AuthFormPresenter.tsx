import { useState } from 'react';
import { AuthError, UserCredential, User } from 'firebase/auth';
import AuthFormLogin from '@/components/AuthFormLogin';
import AuthFormCompleted from '@/components/AuthFormCompleted';
// import AuthFormSignup from '@/components/AuthFormSignup/';

type AuthFormPresenterProps = {
  data: {
    user: User | null | undefined;
    loadingAuth: boolean;
    loadingLogin: boolean;
    loadingSignup: boolean;
    errorAuth: Error | undefined;
    errorLogin: AuthError | undefined;
    errorSignup: AuthError | undefined;
    loginFn: (
      email: string,
      password: string
    ) => Promise<UserCredential | undefined>;
    signupFn: (
      email: string,
      password: string
    ) => Promise<UserCredential | undefined>;
  };
};

const AuthFormPresenter = ({ data }: AuthFormPresenterProps) => {
  const {
    user,
    loadingAuth,
    loadingLogin,
    // loadingSignup,
    errorAuth,
    errorLogin,
    // errorSignup,
    loginFn,
    // signupFn,
  } = data;

  const [isLoginUI, setLoginUI] = useState(false);

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

  if (!user && isLoginUI)
    return (
      <>
        <AuthFormLogin
          loginFn={loginFn}
          loading={loadingLogin}
          error={errorLogin}
        />
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
        {/* <AuthFormSignup /> */}
        {/* <AuthFormSignup
          signupFn={signupFn}
          loading={loadingSignup}
          error={errorSignup}
        /> */}
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
