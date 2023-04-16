'use client';

import { useState } from 'react';
import { auth } from '@/firebase/clientApp';
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
// import AuthFormLogin from '@/components/AuthFormLogin';
// import AuthFormSignUp from '@/components/AuthFormSignUp';
// import AuthFormCompleted from '@/components/AuthFormCompleted';
import AuthFormPresenter from './AuthFormPresenter';

const AuthFormContainer = () => {
  // const [isLoginUI, setLoginUI] = useState(false);

  const [user, loadingAuth, errorAuth] = useAuthState(auth);
  const [signInWithEmailAndPassword, , loadingLogin, errorLogin] =
    useSignInWithEmailAndPassword(auth);

  return <AuthFormPresenter data={{user, loadingAuth, loadingLogin, errorAuth, errorLogin, loginFn: signInWithEmailAndPassword}} />;
};

export default AuthFormContainer;

// if (loadingAuth) {
//   return <p>Checking user...</p>;
// }

// if (errorAuth) {
//   return (
//     <p>
//       There was some error:{' '}
//       <span className="text-red-600">{errorAuth.message}</span>
//     </p>
//   );
// }

// if (!user && isLoginUI)
//   return (
//     <>
//       <AuthFormLogin loginFn={signInWithEmailAndPassword} loading={loadingLogin} error={errorLogin}/>
//       <button
//         className="p-2 text-gray-500"
//         onClick={() => setLoginUI(!isLoginUI)}
//       >
//         Not a member? Click here to Sign up.
//       </button>
//     </>
//   );
// if (!user && !isLoginUI)
//   return (
//     <>
//       <AuthFormSignUp />
//       <button
//         className="p-2 text-gray-500"
//         onClick={() => setLoginUI(!isLoginUI)}
//       >
//         Already a member? Click here to Login.
//       </button>
//     </>
//   );

// return <AuthFormCompleted email={user?.email} />;
