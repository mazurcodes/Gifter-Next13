'use client';

import { auth } from '@/firebase/clientApp';
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from 'react-firebase-hooks/auth';
import AuthFormPresenter from '@/components/AuthForm/AuthFormPresenter';

const AuthFormContainer = () => {
  const [user, loadingAuth, errorAuth] = useAuthState(auth);
  const [signInWithEmailAndPassword, , loadingLogin, errorLogin] =
    useSignInWithEmailAndPassword(auth);
  const [createUserWithEmailAndPassword, , loadingSignup, errorSignup] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sendingReset, errorReset] =
    useSendPasswordResetEmail(auth);

  return (
    <AuthFormPresenter
      data={{
        user,
        loadingAuth,
        loadingLogin,
        loadingSignup,
        sendingReset,
        errorAuth,
        errorLogin,
        errorSignup,
        errorReset,
        loginFn: signInWithEmailAndPassword,
        signupFn: createUserWithEmailAndPassword,
        resetFn: sendPasswordResetEmail,
      }}
    />
  );
};

export default AuthFormContainer;
