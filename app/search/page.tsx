'use client';
import GiftList from '@/components/GiftList';
import { getAllGifts } from '@/firebase/crudUtils';
import { GiftDataType } from '@/types';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const [gifts, setGifts] = useState<GiftDataType[] | []>([]);

  useEffect(() => {
    const fetchGifts = async () => {
      const gifts = await getAllGifts(email);
      setGifts(gifts);
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
