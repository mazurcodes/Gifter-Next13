'use client';
import { GiftDataType } from '@/types';
import { useState } from 'react';
import Gift from '@/components/Gift';
import GiftFilter from '@/components/GiftFilter';

type GiftListProps = {
  data: GiftDataType[];
};

const GiftList = ({ data }: GiftListProps) => {
  const [gifts, setGifts] = useState(data);

  const giftListWithData = gifts.map((gift, index) => (
    <Gift key={`gift-list-${index}`} data={gift} />
  ));

  return (
    <>
      <GiftFilter statusFn={setGifts} data={data} />
      <div className="table border-t border-x rounded-t-md w-full">
        <div className="table-head grid gap-2 grid-cols-[2fr_10fr_repeat(5,_2fr)_3fr] lg:grid-cols-[2fr_10fr_repeat(2,_2fr)] sm:grid-cols-[2fr_5fr] items-center border-b p-4 text-xs text-gray-400">
          <p>Status</p>
          <p>Gift Name</p>
          <p className="sm:hidden">Priority</p>
          <p className="lg:hidden">Occasion</p>
          <p className="lg:hidden">Category</p>
          <p className="sm:hidden">Price</p>
          <p className="lg:hidden">Date</p>
          <p className="lg:hidden">Notes</p>
        </div>
        <div className="table-data">{giftListWithData}</div>
      </div>
    </>
  );
};

export default GiftList;
