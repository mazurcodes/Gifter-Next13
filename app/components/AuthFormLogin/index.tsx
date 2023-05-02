import { auth } from '@/firebase/clientApp';
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
      <div className="wrapper-login border rounded-md mt-3 p-8">
        <label className="flex flex-col mb-4" htmlFor="login-email">
          <p className="font-light pb-4">Email:</p>
          <input
            autoFocus
            type="email"
            name="login-email"
            id="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-72 border rounded-md p-1 px-2 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
          />
        </label>
        <label className="flex flex-col mb-4" htmlFor="login-password">
          <p className="font-light pb-2">Password:</p>
          <input
            type="password"
            name="login-password"
            id="login-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-72 border rounded-md p-1 px-2 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
          />
          <span className="text-red-600">{error?.message}</span>
        </label>
        <div className="flex justify-end">
          <Link href="/login/reset" className="p-1">
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
