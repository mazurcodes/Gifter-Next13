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
      <form
        className="dashboard-delete-form  w-full max-w-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-lg font-bold">We are sorry to see you go :(</h2>
        <p className=" text-slate-500 pt-3">
          Be advised, account deletion is final. There will be no way to restore
          your account.
        </p>
        <label className="dashboard-delete-password font-semibold flex flex-col py-10">
          To delete, confirm your password:{' '}
          <input
            id="newPassword"
            className="p-2 px-4 border rounded-md font-normal text-sm mt-3 w-full focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
            type="password"
            minLength={6}
            {...register('password', { required: true })}
          />
          {errorDelete && (
            <p className="text-red-600 pt-5 font-normal">
              Error: {extractErrorMessage(errorDelete.message)}
            </p>
          )}
        </label>
        <div className="flex justify-between">
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
        </div>
        {isDeleted && <p>User successfully deleted</p>}
      </form>
    );

  return (
    <div className="dashboard-no-user">
      <p>Please login or create account</p>
    </div>
  );
};

export default DashboardDeletePage;
