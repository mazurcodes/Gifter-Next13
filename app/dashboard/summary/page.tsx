'use client';

import { auth } from '@/firebase/clientApp';
import { extractErrorMessage } from '@/utils/server';
import { useAuthState } from 'react-firebase-hooks/auth';

const DashboardSummaryPage = () => {
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
        <p>This will be a summary page</p>
      </div>
    );

  return (
    <div className="dashboard-no-user">
      <p>Please login or create account</p>
    </div>
  );
};

export default DashboardSummaryPage;
