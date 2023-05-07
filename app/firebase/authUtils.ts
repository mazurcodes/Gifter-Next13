import {
  AuthError,
  EmailAuthProvider,
  reauthenticateWithCredential,
  UserCredential,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import {
  useDeleteUser,
  useUpdatePassword,
  useUpdateEmail,
} from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from './clientApp';
import { changeGiftsOwnerEmail, deleteUsersGifts } from './crudUtils';

const getCredential = (userPassword: string) => {
  if (auth.currentUser?.email)
    return EmailAuthProvider.credential(auth.currentUser.email, userPassword);
  return null;
};

export const useReauthenticateUser = (): [
  (password: string) => Promise<UserCredential | undefined>,
  boolean,
  Error | AuthError | undefined
] => {
  const [working, setWorking] = useState(false);
  const [error, setError] = useState<AuthError | undefined>();

  const reauthenticate = async (password: string) => {
    const credential = getCredential(password);
    setWorking(true);
    try {
      const authResult =
        auth.currentUser &&
        credential &&
        (await reauthenticateWithCredential(auth.currentUser, credential));

      if (authResult) {
        setWorking(false);
        return authResult;
      }
    } catch (err) {
      setError(err as AuthError);
      setWorking(false);
    }
  };

  return [reauthenticate, working, error];
};

/**
 * Change password hook.
 *
 * @return [updatePassword, isUpdated, working, error]
 */
export const useChangePassword = (): [
  (oldPassword: string, newPassword: string) => Promise<void>,
  boolean,
  boolean,
  AuthError | Error | undefined
] => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [updateUserPassword, updating, errorUpdate] = useUpdatePassword(auth);
  const [reauthenticateUser, reauthenticating, errorReauth] =
    useReauthenticateUser();

  useEffect(() => {
    isUpdated && toast.success('Password successfully updated');
  }, [isUpdated]);

  const updatePassword = async (oldPassword: string, newPassword: string) => {
    const userCredential = await reauthenticateUser(oldPassword);

    if (userCredential) {
      setIsUpdated(await updateUserPassword(newPassword));
    }
  };

  return [
    updatePassword,
    isUpdated,
    reauthenticating || updating,
    errorReauth || errorUpdate,
  ];
};

/**
 * Delete current user hook.
 *
 * @return [deleteUser, isDeleted, loading, error]
 *
 */
export const useDeleteCurrentUser = (): [
  (password: string) => Promise<void>,
  boolean,
  boolean,
  AuthError | Error | undefined
] => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [deleteCurrentUser, loading, errorDelete] = useDeleteUser(auth);
  const [reauthenticateUser, reauthenticating, errorReauth] =
    useReauthenticateUser();

  useEffect(() => {
    isDeleted && toast.success('User successfully deleted');
  }, [isDeleted]);

  const deleteUser = async (password: string) => {
    const userCredential = await reauthenticateUser(password);

    if (userCredential) {
      userCredential.user.email &&
        (await deleteUsersGifts(userCredential.user.email));
      setIsDeleted(await deleteCurrentUser());
    }
  };

  return [
    deleteUser,
    isDeleted,
    reauthenticating || loading,
    errorReauth || errorDelete,
  ];
};

//TODO: after deleting user delete all user gifts

//TODO: useChangeEmail hook

/**
 * Change email hook.
 *
 *
 * @return [changeEmail, isChanged, working, error]
 *
 */
export const useChangeEmail = (): [
  (newEmail: string, password: string) => Promise<void>,
  boolean,
  boolean,
  AuthError | Error | undefined
] => {
  const [isChanged, setIsChanged] = useState(false);
  const [updateEmail, changing, errorEmail] = useUpdateEmail(auth);
  const [reauthenticateUser, reauthenticating, errorReauth] =
    useReauthenticateUser();

  useEffect(() => {
    isChanged && toast.success('Email successfully changed');
  }, [isChanged]);

  const changeEmail = async (newEmail: string, password: string) => {
    const userCredential = await reauthenticateUser(password);

    if (userCredential) {
      userCredential.user.email &&
        (await changeGiftsOwnerEmail(userCredential.user.email, newEmail));
      setIsChanged(await updateEmail(newEmail));
    }
  };

  return [
    changeEmail,
    isChanged,
    reauthenticating || changing,
    errorReauth || errorEmail,
  ];
};
