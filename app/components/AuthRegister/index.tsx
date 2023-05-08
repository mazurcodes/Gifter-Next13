'use client';
import { auth } from '@/firebase/clientApp';
import { extractErrorMessage } from '@/utils/server';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const AuthFormRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorUI, setErrorUI] = useState('');

  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (password === passwordConfirm) {
      createUserWithEmailAndPassword(email, password);
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
        <label className="flex flex-col mb-6" htmlFor="register-email">
          <p className="font-light pb-2 text-sm">Email:</p>
          <input
            autoCorrect="off"
            autoCapitalize="off"
            tabIndex={1}
            required
            type="email"
            name="register-email"
            id="register-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-72 sm:w-56 border rounded-md p-1 px-2 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
          />
        </label>
        <label className="flex flex-col mb-4" htmlFor="register-password">
          <p className="font-light pb-2 text-sm">Password:</p>
          <input
            tabIndex={2}
            required
            type="password"
            name="register-password"
            id="register-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-72 sm:w-56 border rounded-md p-1 px-2 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
          />
        </label>
        <label
          className="flex flex-col mb-6"
          htmlFor="register-confirm-password"
        >
          <p className="font-light pb-2 text-sm">Confirm password:</p>
          <input
            tabIndex={3}
            required
            type="password"
            name="register-confirm-password"
            id="register-confirm-password"
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
            className="w-72 border rounded-md p-1 px-2 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed sm:w-56"
          />
          <p className="text-slate-300 font-normal text-sm pb-4 pt-1">
            Minimum 6 characters.
          </p>
          <span className="text-red-600">{errorUI}</span>
          {error && (
            <span className="text-red-600">
              Error: {extractErrorMessage(error.message)}
            </span>
          )}
        </label>
        <input
          className="bg-orange-500 rounded-md p-2 px-6 sm:w-full text-white outline-orange-500 focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
          tabIndex={4}
          type="submit"
          value={loading ? 'Signing...' : 'Sign up'}
        />
      </div>
    </form>
  );
};

export default AuthFormRegister;
