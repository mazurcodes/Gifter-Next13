import { db } from '@/firebase/clientApp';
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where,
  writeBatch,
} from 'firebase/firestore';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import type { FirestoreError } from 'firebase/firestore';
import type { GiftDataType } from '@/types';
import { toast } from 'react-toastify';

// TODO: research how to handle Error messages whithout crashing app

// Firestore collection reference for gifts
const giftsCollection = collection(db, 'gifts');

export const createGift = async (giftData: GiftDataType): Promise<string> => {
  try {
    const docRef = await addDoc(giftsCollection, giftData);
    toast.success('Gift created successfully!');
    return docRef.id;
  } catch (error) {
    toast.error(`Failed to create gift: ${error}`);
    console.error('Failed to create gift:', error);
    throw new Error('Failed to create gift');
  }
};

export const getGift = async (giftId: string): Promise<GiftDataType | null> => {
  try {
    const docSnap = await getDoc(doc(giftsCollection, giftId));
    if (docSnap.exists()) {
      return docSnap.data() as GiftDataType;
    } else return null;
  } catch (error) {
    toast.error(`Error getting gift: ${error}`);
    console.error('Error getting gift', error);
    throw new Error('Failed to get gift');
  }
};

export const getAllGifts = async (
  ownerEmail: string | null
): Promise<GiftDataType[]> => {
  if (!ownerEmail) return [];
  try {
    const q = query(giftsCollection, where('ownerEmail', '==', ownerEmail));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(
      (doc) => ({ ...doc.data(), uid: doc.id } as GiftDataType)
    );
  } catch (error) {
    console.error('Error getting gifts:', error);
    toast.error(`Error getting gift: ${error}`);
    throw new Error('Failed to get gifts');
  }
};

export const updateGift = async (
  giftId: string,
  giftData: Partial<GiftDataType>
): Promise<string> => {
  try {
    await updateDoc(doc(giftsCollection, giftId), giftData);
    toast.success('Gift updated successfully!');
    return giftId;
  } catch (error) {
    console.error('Error updating gift:', error);
    toast.error(`Error updating gift: ${error}`);
    throw new Error('Failed to update gift');
  }
};

export const deleteGift = async (giftId: string): Promise<string> => {
  try {
    await deleteDoc(doc(giftsCollection, giftId));
    toast.success('Gift deleted successfully!');
    return giftId;
  } catch (error) {
    console.error('Error deleting gift:', error);
    toast.error(`Error deleting gift: ${error}`);
    throw new Error('Failed to delete gift');
  }
};

export const useGift = (
  giftId = ''
): [GiftDataType | undefined, boolean, FirestoreError | undefined] => {
  const [value, loading, error] = useDocumentOnce(doc(giftsCollection, giftId));
  const gift = value?.data();
  return [gift as GiftDataType, loading, error];
};

export const deleteUsersGifts = async (ownerEmail: string) => {
  const batch = writeBatch(db);
  const gifts = await getAllGifts(ownerEmail);

  gifts.forEach((gift) => {
    const docRef = doc(giftsCollection, gift.uid);
    batch.delete(docRef);
  });

  batch.commit();
};

export const changeGiftsOwnerEmail = async (
  ownerEmail: string,
  newOwnerEmail: string
) => {
  const batch = writeBatch(db);
  const gifts = await getAllGifts(ownerEmail);

  gifts.forEach((gift) => {
    const docRef = doc(giftsCollection, gift.uid);
    batch.update(docRef, { ownerEmail: newOwnerEmail });
  });

  batch.commit();
};
