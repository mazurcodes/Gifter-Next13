'use client';

import { auth } from '@/firebase/clientApp';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    
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
        </label>
        <input
          className="bg-orange-500 rounded-md p-2 px-6 text-white outline-orange-500 focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
          type="submit"
          value="Login"
        />
      </div>
    </form>
  );
};

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      setError("Passwords doesn't match");
    } else {
      setError('');
    }
    console.log('email: ', email, 'password: ', password, 'error: ', error);
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
          <span className="text-red-600">{error}</span>
        </label>
        <input
          className="bg-orange-500 rounded-md p-2 px-6 text-white outline-orange-500 focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
          type="submit"
          value="Sign up"
        />
      </div>
    </form>
  );
};

const AuthCompleted = ({ email }: { email: string | null | undefined }) => {
  return (
    <div className="wrapper-auth-completed">
      <h3>
        You are signin: <span className="text-orange-500">{email}</span>
      </h3>
    </div>
  );
};

const AuthForm = () => {
  const [isLoginUI, setLoginUI] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuth(true);
        setUser(user);
      } else {
        setAuth(false);
        setUser(null);
      }
    });
    return unsub();
  });

  if (!isAuth && isLoginUI)
    return (
      <>
        <LoginForm />
        <button
          className="p-2 text-gray-500"
          onClick={() => setLoginUI(!isLoginUI)}
        >
          Not a member? Click here to Sign up.
        </button>
      </>
    );
  if (!isAuth && !isLoginUI)
    return (
      <>
        <RegisterForm />
        <button
          className="p-2 text-gray-500"
          onClick={() => setLoginUI(!isLoginUI)}
        >
          Already a member? Click here to Login.
        </button>
      </>
    );
  return <AuthCompleted email={user?.email} />;
};

export default AuthForm;
