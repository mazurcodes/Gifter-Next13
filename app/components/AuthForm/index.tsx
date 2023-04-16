'use client';

import { auth } from '@/firebase/clientApp';
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import AuthFormPresenter from './AuthFormPresenter';

const AuthFormContainer = () => {
  const [user, loadingAuth, errorAuth] = useAuthState(auth);
  const [signInWithEmailAndPassword, , loadingLogin, errorLogin] =
    useSignInWithEmailAndPassword(auth);
  const [createUserWithEmailAndPassword, , loadingSignup, errorSignup] =
    useCreateUserWithEmailAndPassword(auth);

  return (
    <AuthFormPresenter
      data={{
        user,
        loadingAuth,
        loadingLogin,
        loadingSignup,
        errorAuth,
        errorLogin,
        errorSignup,
        loginFn: signInWithEmailAndPassword,
        signupFn: createUserWithEmailAndPassword,
      }}
    />
  );
};

export default AuthFormContainer;
