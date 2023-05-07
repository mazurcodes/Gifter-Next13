'use client';

import Link from 'next/link';
import { auth } from '@/firebase/clientApp';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Dispatch, SetStateAction } from 'react';
import { shortEmailAddress } from '@/utils/server';

type UserMenuProps = {
  close: Dispatch<SetStateAction<boolean>>;
};

const UserMenu = ({ close }: UserMenuProps) => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  if (!user)
    return (
      <div
        role="menu"
        className="wrapper absolute top-15 right-0 border rounded-md w-64 text-sm bg-white z-50"
      >
        <Link
          href="/signup"
          onClick={() => close(false)}
          className="block m-6 p-2 text-center bg-orange-500 rounded-md text-white text-base"
        >
          Sign Up
        </Link>
      </div>
    );

  return (
    <div
      role="menu"
      className="wrapper absolute top-15 right-0 border rounded-md w-64 text-sm bg-white z-50"
    >
      <div className="user-account py-6 border-b">
        <h3 className="capitalize font-bold text-orange-500 text-xs pb-3 px-6">
          Account
        </h3>
        <p className="user-email py-2 px-6 my-3 text-gray-400">
          {user?.email && shortEmailAddress(user.email, 30)}
        </p>
        <Link
          href="/dashboard"
          className="py-2 px-6 block hover:bg-slate-50"
          onClick={() => close(false)}
        >
          Mange Account
        </Link>
      </div>
      <div className="user-gifter py-6 border-b">
        <h3 className="capitalize font-bold text-orange-500 text-xs pb-3 px-6">
          Gifter
        </h3>
        <div className="user-gifter-links flex flex-col">
          <Link
            href="/dashboard/wishlist"
            className="py-2 px-6 my-3 hover:bg-slate-50"
            onClick={() => close(false)}
          >
            Wishlist
          </Link>
          <Link
            href="/dashboard/summary"
            className="py-2 px-6 hover:bg-slate-50"
            onClick={() => close(false)}
          >
            Statistics
          </Link>
        </div>
      </div>
      <div className="user-signout py-6">
        <Link
          href="/"
          onClick={async () => await signOut()}
          className="block px-6 py-2 hover:bg-slate-50"
        >
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default UserMenu;
