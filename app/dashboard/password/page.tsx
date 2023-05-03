'use client';

import { auth } from '@/firebase/clientApp';
import { extractErrorMessage } from '@/utils/server';
import { useAuthState } from 'react-firebase-hooks/auth';

const DashboardPasswordPage = () => {
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
        <label className="dashboard-username font-semibold flex flex-col pb-4">
          Old password: <input className="p-2 border" type="password" />
        </label>
        <label className="dashboard-username-pwrd font-semibold flex flex-col">
          New password: <input className="p-2 border" type="password" />
          <p className="text-slate-300 font-normal text-sm pb-4 pt-1">
            Minimum 6 characters.
          </p>
        </label>
        <button className="bg-orange-500 py-2 px-4 text-white rounded-md ">
          change
        </button>
      </div>
    );

  return (
    <div className="dashboard-no-user">
      <p>Please login or create account</p>
    </div>
  );
};

export default DashboardPasswordPage;
