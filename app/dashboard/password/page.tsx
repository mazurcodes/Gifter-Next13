'use client';

import { useChangePassword } from '@/firebase/authUtils';
import { auth } from '@/firebase/clientApp';
import { extractErrorMessage } from '@/utils/server';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

type ResetPasswordFieldValues = { oldPassword: string; newPassword: string };

const DashboardPasswordPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit } = useForm<ResetPasswordFieldValues>();
  const [updatePassword, isUpdated, updating, errorPassword] =
    useChangePassword();

  const onSubmit = async (resetFormData: ResetPasswordFieldValues) => {
    const { oldPassword, newPassword } = resetFormData;
    await updatePassword(oldPassword, newPassword);
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
        className="dashboard-password-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="dashboard-username font-semibold flex flex-col pb-4">
          Old password:{' '}
          <input
            id="oldPassword"
            className="p-2 border"
            type="password"
            minLength={6}
            {...register('oldPassword', { required: true, minLength: 6 })}
          />
        </label>
        <label className="dashboard-username-pwrd font-semibold flex flex-col">
          New password:{' '}
          <input
            id="newPassword"
            className="p-2 border"
            type="password"
            minLength={6}
            {...register('newPassword', { required: true })}
          />
          <p className="text-slate-300 font-normal text-sm pb-4 pt-1">
            Minimum 6 characters.
          </p>
        </label>
        <button
          type="submit"
          className="bg-orange-500 py-2 px-4 text-white rounded-md "
        >
          {updating ? 'Updating' : 'Change'}
        </button>
        {isUpdated && <p>Password was changed</p>}
        {errorPassword && (
          <p>
            There was some error: {extractErrorMessage(errorPassword.message)}
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

export default DashboardPasswordPage;
