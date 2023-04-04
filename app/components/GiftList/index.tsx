'use client';
import { GiftsDataType } from '@/types';
import { useState } from 'react';
import Gift from '../Gift';
import GiftFilter from '../GiftFilter';

type GiftListProps = {
  data: GiftsDataType[];
};

const GiftList = ({ data }: GiftListProps) => {
  const [gifts, setGifts] = useState(data);

  const giftListWithData = gifts.map((gift) => (
    <Gift key={gift.id} data={gift} />
  ));

  return (
    <>
      <GiftFilter statusFn={setGifts} data={data} />
      <div className="table border rounded-md w-full">
        <div className="table-head grid gap-2 grid-cols-[2fr_10fr_repeat(5,_2fr)_3fr] items-center border-b p-4 text-xs text-gray-400">
          <p>Status</p>
          <p>Gift Name</p>
          <p>Priority</p>
          <p>Occasion</p>
          <p>Category</p>
          <p>Price</p>
          <p>Date</p>
          <p>Notes</p>
        </div>
        <div className="table-data">{giftListWithData}</div>
      </div>
    </>
  );
};

export default GiftList;
