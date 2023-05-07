'use client';
import { auth } from '@/firebase/clientApp';
import { extractErrorMessage } from '@/utils/server';
import { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

const actionCodeSettings = {
  url: 'http://localhost:3000/login',
};

const AuthFormReset = () => {
  const [email, setEmail] = useState('');
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    sendPasswordResetEmail(email, actionCodeSettings);
  };

  return (
    <form role="form" className="flex flex-col" onSubmit={handleSubmit}>
      <h1 className="logo font-black text-6xl sm:text-4xl text-center text-orange-500">
        Reset <br /> Password
      </h1>
      <div className="border rounded-md mt-3 p-8 sm:p-4">
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
          <span className="text-red-600">
            {error && extractErrorMessage(error.message)}
          </span>
        </label>
        <input
          className="bg-orange-500 rounded-md p-2 px-6 text-white outline-orange-500 focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
          type="submit"
          value={sending ? 'Sending' : 'Send'}
        />
      </div>
    </form>
  );
};

export default AuthFormReset;
