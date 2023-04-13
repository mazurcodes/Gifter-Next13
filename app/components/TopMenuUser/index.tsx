'use client';
import Link from 'next/link';
import { auth } from '@/firebase/clientApp';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';

const UserMenu = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  if(!user) return (
    <div
      role="menu"
      className="wrapper absolute top-15 right-0 border rounded-md w-64 text-sm bg-white z-50"
    >
      <Link href='/auth' className='block m-6 p-2 text-center bg-orange-500 rounded-md text-white text-base'>Sign Up</Link>
    </div>
  )
  
  return (
    <div
      role="menu"
      className="wrapper absolute top-15 right-0 border rounded-md w-64 text-sm bg-white z-50"
    >
      <div className="user-account p-6 border-b">
        <h3 className="capitalize font-bold text-orange-500 text-xs">
          Account
        </h3>
        <p className="user-email pt-6 text-gray-400">{user?.email}</p>
        <Link href="/dashboard" className="pt-6 block">
          Mange Account
        </Link>
      </div>
      <div className="user-gifter p-6 border-b">
        <h3 className="capitalize font-bold text-orange-500 text-xs">Gifter</h3>
        <div className="user-gifter-links flex flex-col">
          <Link href="/dashboard/wishlist" className="pt-6">
            Wishlist
          </Link>
          <Link href="/dashboard/friends" className="pt-6">
            Friends
          </Link>
        </div>
      </div>
      <div className="user-signout p-6">
        <Link href="/" onClick={async () => await signOut()}>
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default UserMenu;
