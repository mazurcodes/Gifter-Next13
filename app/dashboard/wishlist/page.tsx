'use client';
import GiftList from '@/components/GiftList';
import { auth } from '@/firebase/clientApp';
import { getAllGifts } from '@/firebase/crudUtils';
import { GiftDataType } from '@/types';
import { shortEmailAddress } from '@/utils/server';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const WishlistPage = () => {
  const [user] = useAuthState(auth);
  const [gifts, setGifts] = useState<GiftDataType[] | []>([]);

  useEffect(() => {
    const fetchGifts = async () => {
      if (user?.email) {
        const gifts = await getAllGifts(user.email);
        setGifts(gifts);
      }
    };
    fetchGifts();
  }, [user?.email]);

  return (
    <div className="wrapper-whislist-page pl-10 pt-1 flex-1 sm:pl-0">
      <h2 className="top-menu-header font-semibold text-lg">
        Wishlist for:{' '}
        <span className="font-normal text-orange-500">
          {user?.email && shortEmailAddress(user.email, 29)}
        </span>
      </h2>
      <GiftList data={gifts} />
      <div className="table-add my-3">
        <Link
          href={'/dashboard/wishlist/add'}
          className="p-2 text-center bg-orange-500 rounded-md text-white text-base  focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
        >
          Add new item
        </Link>
      </div>
    </div>
  );
};

export default WishlistPage;
