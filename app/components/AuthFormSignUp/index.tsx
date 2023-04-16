'use client';

import { useState } from 'react';
import { AuthError, UserCredential } from 'firebase/auth';

type AuthFormSignupProps = {
  signupFn: (
    email: string,
    password: string
  ) => Promise<UserCredential | undefined>;
  loading: boolean;
  error: AuthError | undefined;
};

const AuthFormSignup = ({ signupFn, loading, error }: AuthFormSignupProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorUI, setErrorUI] = useState('');

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (password === passwordConfirm) {
      signupFn(email, password);
    } else {
      setErrorUI("Passwords doesn't match");
    }
  };

  return (
    <form role="form" className="flex flex-col" onSubmit={handleSubmit}>
      <h1 className="logo font-black text-5xl text-center text-orange-500">
        Sign up
      </h1>
      <div className="wrapper-register border rounded-md mt-3 p-8 sm:p-4">
        <label className="flex flex-col mb-4" htmlFor="register-email">
          <p className="font-light pb-2 text-sm">Email:</p>
          <input
            type="email"
            name="register-email"
            id="register-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-72 border rounded-md p-1 px-2 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed sm:w-56"
          />
        </label>
        <label className="flex flex-col mb-4" htmlFor="register-password">
          <p className="font-light pb-2 text-sm">Password:</p>
          <input
            type="password"
            name="register-password"
            id="register-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-72 border rounded-md p-1 px-2 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed sm:w-56"
          />
        </label>
        <label
          className="flex flex-col mb-4"
          htmlFor="register-confirm-password"
        >
          <p className="font-light pb-2 text-sm">Confirm password:</p>
          <input
            type="password"
            name="register-confirm-password"
            id="register-confirm-password"
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
            className="w-72 border rounded-md p-1 px-2 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed sm:w-56"
          />
          <span className="text-red-600">{errorUI}</span>
          <span className="text-red-600">{error?.message}</span>
        </label>
        <input
          className="bg-orange-500 rounded-md p-2 px-6 text-white outline-orange-500 focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
          type="submit"
          value={loading ? 'Signing...' : 'Sign up'}
        />
      </div>
    </form>
  );
};

export default AuthFormSignup;
