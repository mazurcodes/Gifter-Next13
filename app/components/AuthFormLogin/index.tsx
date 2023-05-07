import { auth } from '@/firebase/clientApp';
import { extractErrorMessage } from '@/utils/server';
import Link from 'next/link';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const AuthFormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <form role="form" className="flex flex-col" onSubmit={handleSubmit}>
      <h1 className="logo font-black text-5xl text-center text-orange-500">
        Login
      </h1>
      <div className="wrapper-login border rounded-md mt-3 p-8 sm:p-4">
        <label className="flex flex-col mb-6" htmlFor="login-email">
          <p className="font-light pb-2 text-sm">Email:</p>
          <input
            autoFocus
            type="email"
            name="login-email"
            id="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-72 sm:w-56 border rounded-md p-1 px-2 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
          />
        </label>
        <label className="flex flex-col mb-6" htmlFor="login-password">
          <p className="font-light pb-2 text-sm">Password:</p>
          <input
            type="password"
            name="login-password"
            id="login-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-72 sm:w-56 border rounded-md p-1 px-2 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
          />
          {error && (
            <span className="text-red-600">
              Error: {extractErrorMessage(error.message)}
            </span>
          )}
        </label>
        <div className="flex justify-end">
          <Link href="/login/reset" className="p-1 mb-4 text-slate-500">
            Forgot password?
          </Link>
        </div>
        <input
          className="bg-orange-500 rounded-md p-2 px-6 text-white outline-orange-500 focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
          type="submit"
          value={loading ? 'Loading' : 'Login'}
        />
      </div>
    </form>
  );
};

export default AuthFormLogin;
