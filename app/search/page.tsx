'use client';
import GiftList from '@/components/GiftList';
import { getAllGifts } from '@/firebase/crudUtils';
import { GiftDataType } from '@/types';
import { useEffect, useState } from 'react';

type ResultsPageProps = {
  searchParams: {
    [key: string]: string;
  };
};

const SearchPage = ({ searchParams }: ResultsPageProps) => {
  const { email } = searchParams;
  const [gifts, setGifts] = useState<GiftDataType[] | []>([]);

  useEffect(() => {
    const fetchGifts = async () => {
      if (email) {
        const gifts = await getAllGifts(email);
        setGifts(gifts);
      }
    };
    fetchGifts();
  }, [email]);

  return (
    <>
      <main className="flex-1 p-10">
        <h2 className="top-menu-header font-semibold text-lg">
          Wishlist for:{' '}
          <span className="font-normal text-orange-500">{email}</span>
        </h2>
        {gifts && <GiftList data={gifts} />}
      </main>
    </>
  );
};

export default SearchPage;
