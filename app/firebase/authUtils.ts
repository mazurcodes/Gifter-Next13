import {
  AuthError,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from 'firebase/auth';
import { useUpdatePassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from './clientApp';

const getCredential = (userPassword: string) => {
  if (auth.currentUser?.email)
    return EmailAuthProvider.credential(auth.currentUser.email, userPassword);
  return null;
};

const reauthenticateUser = async (password: string) => {
  const credential = getCredential(password);
  try {
    const authResult =
      auth.currentUser &&
      credential &&
      (await reauthenticateWithCredential(auth.currentUser, credential));
    return authResult;
  } catch (error) {
    console.log('Error reauthenticatin user: ', error);
  }
};

export const useChangePassword = (): [
  (oldPassword: string, newPassword: string) => Promise<void>,
  boolean,
  boolean,
  AuthError | Error | undefined
] => {
  let isUpdated = false;
  const [updateUserPassword, updating, error] = useUpdatePassword(auth);

  const updatePassword = async (oldPassword: string, newPassword: string) => {
    const userCredential = await reauthenticateUser(oldPassword);

    if (userCredential) {
      isUpdated = await updateUserPassword(newPassword);
      isUpdated && toast('Password successfully updated');
    }
  };

  return [updatePassword, isUpdated, updating, error];
};

// const useChangeEmail = (newEmail, password) => {};
