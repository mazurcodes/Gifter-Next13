'use client';

import { auth } from '@/firebase/clientApp';
import { extractErrorMessage } from '@/utils/server';
import { useAuthState } from 'react-firebase-hooks/auth';

const DashboardDeletePage = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div className="dashboard-loading">
        <p>Checking user...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-error">
        <p>There was some error: {extractErrorMessage(error.message)}</p>
      </div>
    );
  }

  if (user)
    return (
      <div className="dashboard-wrapper">
        <p>We are sorry to see you go.</p>
        <button className="bg-orange-500 py-2 px-4 text-white rounded-md ">
          Nevermind
        </button>
        <button className="border py-2 px-4 rounded-md ml-4">Delete</button>
      </div>
    );

  return (
    <div className="dashboard-no-user">
      <p>Please login or create account</p>
    </div>
  );
};

export default DashboardDeletePage;
