'use client';

import { useChangeEmail } from '@/firebase/authUtils';
import { auth } from '@/firebase/clientApp';
import { extractErrorMessage } from '@/utils/server';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

type FormDataValues = {
  email: string;
  password: string;
};

const DashboardPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit, watch, setValue } = useForm<FormDataValues>();
  const [changeEmail, , working, errorEmail] = useChangeEmail();

  const watchEmail = watch('email');

  useEffect(() => {
    user?.email && setValue('email', user.email);
  }, [user, setValue]);

  const onSubmit = (formData: FormDataValues) => {
    changeEmail(formData.email, formData.password);
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

  if (user) {
    return (
      <form className="dashboard-email" onSubmit={handleSubmit(onSubmit)}>
        <label className="dashboard-email font-semibold text-lg flex flex-col pb-10">
          Email{' '}
          <input
            className="p-2 border rounded-md font-normal text-sm mt-3"
            type="email"
            {...register('email')}
          />
        </label>

        {watchEmail && watchEmail !== user.email && (
          <label className="dashboard-email-pwrd font-semibold text-lg flex flex-col pb-10">
            Password to change your email{' '}
            <input
              className="p-2 border rounded-md font-normal text-sm mt-3"
              type="password"
              {...register('password')}
            />
          </label>
        )}
        <div>
          <button
            className="bg-orange-500 py-2 px-4 text-white rounded-md"
            type="submit"
          >
            {working ? 'Saving' : 'Save Changes'}
          </button>
        </div>
        {errorEmail && (
          <p>There was some error: {extractErrorMessage(errorEmail.message)}</p>
        )}
        <p className="pt-10">your email is not verified.</p>
      </form>
    );
  }

  return (
    <div className="dashboard-no-user">
      <p>Please login or create account</p>
    </div>
  );
};

export default DashboardPage;
