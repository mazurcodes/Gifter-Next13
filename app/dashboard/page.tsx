'use client';

import { auth } from '@/firebase/clientApp';
import { extractErrorMessage } from '@/utils/server';
import { useAuthState } from 'react-firebase-hooks/auth';

const DashboardPage = () => {
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

  if (user) {
    return (
      <div className="dashboard-wrapper">
        <label className="dashboard-username font-semibold text-lg flex flex-col pb-4">
          Username: <input className="p-2 border" value="MazurCodes" disabled />
        </label>

        {/* TODO: this password will be visible when user click on "change" button*/}
        <label className="dashboard-username-pwrd font-semibold flex flex-col">
          Current password:{' '}
          <input
            className="p-2 border"
            placeholder="Provide your current password"
            disabled
          />
        </label>
        <div>
          <span>change your username </span>
          <button className="bg-orange-500 py-2 px-4 text-white rounded-md">
            change
          </button>
        </div>
        <label className="dashboard-email font-semibold text-lg flex flex-col pb-4">
          Email:{' '}
          <input className="p-2 border" value={user.email || ''} disabled />
        </label>

        {/* TODO: this password will be visible when user click on "change" button*/}
        <label className="dashboard-username-pwrd font-semibold flex flex-col">
          Current password:{' '}
          <input
            className="p-2 border"
            placeholder="Provide your current password"
            disabled
          />
        </label>
        <div>
          <span>change your email </span>
          <button className="bg-orange-500 py-2 px-4 text-white rounded-md">
            change
          </button>
        </div>
        <p className="pt-10">your email is not verified</p>
      </div>
    );
  }

  return (
    <div className="dashboard-no-user">
      <p>Please login or create account</p>
    </div>
  );
};

export default DashboardPage;
