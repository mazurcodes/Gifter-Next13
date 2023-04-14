'use client'

import { auth } from '@/firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';

const DashboardPage = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <h2 className="top-menu-header font-semibold text-lg">
        Hello,{' '}
        <span className="font-normal text-orange-500">{user?.email}</span>
      </h2>
    </>
  );
};

export default DashboardPage;
