'use client';
import GiftList from '@/components/GiftList';
import { auth } from '@/firebase/clientApp';
import { getAllGifts } from '@/firebase/crudUtils';
import { GiftDataType } from '@/types';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const WishlistPage = () => {
  const [user] = useAuthState(auth);
  const [gifts, setGifts] = useState<GiftDataType[] | []>([]);

  useEffect(() => {
    const fetchGifts = async () => {
      if (user?.email) {
        const gifts = await getAllGifts(user.email);
        console.log(gifts);
        setGifts(gifts);
      }
    };
    fetchGifts();
  }, [user?.email]);

  return (
    <div className="wrapper-whislist-page pl-10 pt-1">
      <h2 className="top-menu-header font-semibold text-lg">
        Wishlist for:{' '}
        <span className="font-normal text-orange-500">{user?.email}</span>
      </h2>
      <GiftList data={gifts} />
    </div>
  );
};

export default WishlistPage;
