import GiftList from '@/components/GiftList';
import TopMenu from '@/components/TopMenu';
import { Metadata } from 'next';
import { giftsData } from '@/data/giftsData';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';
import { GiftsDataType } from '@/types';

const fetchGiftsByEmail = async (email: string) => {
  const q = query(collection(db, 'gifts'), where('ownerEmail', '==', email));
  const results = await getDocs(q);
  const gifts: GiftsDataType[] = [];
  results.forEach((doc) => {
    const gift = doc.data();
    //TODO: const date = Timestamp.toDate(gift.date); //but it will be a Date object
    // gifts.push({...gift as GiftsDataType, date});
    gifts.push(gift as GiftsDataType);
  });
  return gifts;

  //TODO: solve problem with Timestamp in database or switch timestamp with string date format like 'DD.MM.YYYY'
  // https://firebase.google.com/docs/reference/js/firestore_.timestamp?hl=en&authuser=0
};

export const metadata: Metadata = {
  title: 'Gifter | Wishlist',
  description: 'Wishlist for user',
};

type ResultsPageProps = {
  searchParams: {
    [key: string]: string;
  };
};

const ResultsPage = async ({ searchParams }: ResultsPageProps) => {
  const { email } = searchParams;

  const gifts = await fetchGiftsByEmail(email);

  return (
    <>
      <TopMenu extended />
      <main className="flex-1 p-10">
        <h2 className="top-menu-header font-semibold text-lg">
          Wishlist for:{' '}
          <span className="font-normal text-orange-500">{email}</span>
        </h2>
        <GiftList data={giftsData} />
      </main>
    </>
  );
};

export default ResultsPage;
