import { db } from '@/firebase/clientApp';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc, query, where } from 'firebase/firestore';
import { GiftsDataType } from '@/types'; // Import the GiftsDataType type

// Firestore collection reference for gifts
const giftsCollection = collection(db, 'gifts');

// Function to create a new gift
export const createGift = async (giftData: GiftsDataType): Promise<string> => {
    try {
      // Add the gift data to the gifts collection and get the document ID
      const docRef = await addDoc(giftsCollection, giftData);
      return docRef.id;
    } catch (error) {
      console.error('Error creating gift:', error);
      throw new Error('Failed to create gift');
    }
  };
  
  // Function to get all gifts with a specific ownerEmail
  export const getAllGifts = async (ownerEmail: string): Promise<GiftsDataType[]> => {
    try {
      // Create a query to get all documents from the gifts collection where ownerEmail matches the given ownerEmail
      const q = query(giftsCollection, where('ownerEmail', '==', ownerEmail));
      // Get the documents from the query snapshot
      const snapshot = await getDocs(q);
      // Map the documents to their data and return as an array of gifts
      return snapshot.docs.map(doc => doc.data() as GiftsDataType);
    } catch (error) {
      console.error('Error getting gifts:', error);
      throw new Error('Failed to get gifts');
    }
  };
  
  // Function to update a gift
  export const updateGift = async (giftId: string, giftData: Partial<GiftsDataType>): Promise<string> => {
    try {
      // Update the gift document with the given giftData
      await updateDoc(doc(giftsCollection, giftId), giftData);
      return giftId;
    } catch (error) {
      console.error('Error updating gift:', error);
      throw new Error('Failed to update gift');
    }
  };
  
  // Function to delete a gift
  export const deleteGift = async (giftId: string): Promise<string> => {
    try {
      // Delete the gift document with the given giftId
      await deleteDoc(doc(giftsCollection, giftId));
      return giftId;
    } catch (error) {
      console.error('Error deleting gift:', error);
      throw new Error('Failed to delete gift');
    }
  };