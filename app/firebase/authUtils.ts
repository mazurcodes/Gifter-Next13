import {
  AuthError,
  EmailAuthProvider,
  reauthenticateWithCredential,
  UserCredential,
} from 'firebase/auth';
import { useState } from 'react';
import { useUpdatePassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from './clientApp';

const getCredential = (userPassword: string) => {
  if (auth.currentUser?.email)
    return EmailAuthProvider.credential(auth.currentUser.email, userPassword);
  return null;
};

export const useReauthenticateUser = (): [
  (password: string) => void,
  UserCredential | null,
  boolean,
  Error | AuthError | undefined
] => {
  const [userCredential, setUserCredential] = useState<UserCredential | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthError | undefined>();

  const reauthenticate = async (password: string) => {
    const credential = getCredential(password);
    setLoading(true);
    try {
      auth.currentUser &&
        credential &&
        setUserCredential(
          await reauthenticateWithCredential(auth.currentUser, credential)
        );
      if (userCredential) {
        setLoading(false);
      }
    } catch (err) {
      setError(err as AuthError);
      console.log('Error useReautherticate: ', err);
      setLoading(false);
    }
  };

  return [reauthenticate, userCredential, loading, error];
};

export const useChangePassword = (): [
  (oldPassword: string, newPassword: string) => Promise<void>,
  boolean,
  boolean,
  AuthError | Error | undefined
] => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [error, setError] = useState<Error | AuthError | undefined>(undefined);
  const [updateUserPassword, updating, errorUpdate] = useUpdatePassword(auth);
  const [reauthenticateUser, userCredential, reauthenticating, errorReauth] =
    useReauthenticateUser();

  const updatePassword = async (oldPassword: string, newPassword: string) => {
    reauthenticateUser(oldPassword);

    if (userCredential && !reauthenticating) {
      setIsUpdated(await updateUserPassword(newPassword));
      isUpdated && toast.success('Password successfully updated');
    }

    if (errorReauth) {
      setError(errorReauth);
    }
    if (errorUpdate) {
      setError(errorUpdate);
    }
  };

  return [updatePassword, isUpdated, updating, error];
};

// const useChangeEmail = (newEmail, password) => {};
