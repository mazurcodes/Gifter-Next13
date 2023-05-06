'use client';

import { useDeleteCurrentUser } from '@/firebase/authUtils';
import { auth } from '@/firebase/clientApp';
import { extractErrorMessage } from '@/utils/server';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

type FormDataFields = {
  password: string;
};

const DashboardDeletePage = () => {
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit } = useForm<FormDataFields>();
  const [deleteUser, isDeleted, working, errorDelete] = useDeleteCurrentUser();

  const onSubmit = (formData: FormDataFields) => {
    deleteUser(formData.password);
  };

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
      <form className="dashboard-delete-form" onSubmit={handleSubmit(onSubmit)}>
        <label className="dashboard-username-pwrd font-semibold flex flex-col pb-5">
          Confirm your password:{' '}
          <input
            id="newPassword"
            className="p-2 border"
            type="password"
            minLength={6}
            {...register('password', { required: true })}
          />
        </label>

        <Link
          href={'/dashboard'}
          className="bg-orange-500 py-2 px-4 text-white rounded-md "
        >
          Nevermind
        </Link>
        <button
          type="submit"
          className="border py-2 px-4 text-red-600 rounded-md ml-2"
        >
          {working ? 'Deleting' : 'Delete'}
        </button>
        {isDeleted && <p>User successfully deleted</p>}
        {errorDelete && (
          <p>
            There was some error: {extractErrorMessage(errorDelete.message)}
          </p>
        )}
      </form>
    );

  return (
    <div className="dashboard-no-user">
      <p>Please login or create account</p>
    </div>
  );
};

export default DashboardDeletePage;
