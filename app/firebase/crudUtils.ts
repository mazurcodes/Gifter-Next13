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
} from 'firebase/firestore';
import { GiftDataType } from '@/types';

// Firestore collection reference for gifts
const giftsCollection = collection(db, 'gifts');

export const createGift = async (giftData: GiftDataType): Promise<string> => {
  try {
    const docRef = await addDoc(giftsCollection, giftData);
    return docRef.id;
  } catch (error) {
    console.error('Error creating gift:', error);
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
    console.error('Error getting gift', error);
    throw new Error('Failed to get gift');
  }
};

export const getAllGifts = async (
  ownerEmail: string
): Promise<GiftDataType[]> => {
  try {
    const q = query(giftsCollection, where('ownerEmail', '==', ownerEmail));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(
      (doc) => ({ ...doc.data(), uid: doc.id } as GiftDataType)
    );
  } catch (error) {
    console.error('Error getting gifts:', error);
    throw new Error('Failed to get gifts');
  }
};

export const updateGift = async (
  giftId: string,
  giftData: Partial<GiftDataType>
): Promise<string> => {
  try {
    await updateDoc(doc(giftsCollection, giftId), giftData);
    return giftId;
  } catch (error) {
    console.error('Error updating gift:', error);
    throw new Error('Failed to update gift');
  }
};

export const deleteGift = async (giftId: string): Promise<string> => {
  try {
    await deleteDoc(doc(giftsCollection, giftId));
    return giftId;
  } catch (error) {
    console.error('Error deleting gift:', error);
    throw new Error('Failed to delete gift');
  }
};
