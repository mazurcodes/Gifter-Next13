'use client';

import { GiftDataType } from '@/types';
import { Status } from '@/constants';
import { filterGiftsByStatus } from '@/utils/server';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type GiftFilterProps = {
  statusFn: Dispatch<SetStateAction<GiftDataType[]>>;
  data: GiftDataType[];
};

const GiftFilter = ({ statusFn, data }: GiftFilterProps) => {
  const [filter, setFilter] = useState<Status | ''>('');

  useEffect(() => {
    const filtered = filterGiftsByStatus(data, filter);
    statusFn(filtered);
  }, [data, statusFn, filter]);

  return (
    <div
      className="filter-bar mt-4 text-sm font-semibold text-gray-500"
      role="toolbar"
    >
      <button
        className={`filter-button border-4 border-transparent rounded-lg px-4 h-8 mr-2 mb-2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)] ${
          filter === '' &&
          'border-4 border-dashed border-l-orange-400 border-b-blue-400 border-r-red-500 border-t-green-500 text-gray-700 shadow-none'
        }`}
        onClick={() => setFilter('')}
      >
        All
      </button>
      <button
        className={`filter-button border-4 border-transparent rounded-lg px-4 h-8 mr-2 mb-2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)] ${
          filter === Status.AVAILABLE &&
          'border-4 border-dashed border-l-green-500 border-t-green-500 border-r-green-500 border-b-green-500 shadow-none'
        }`}
        onClick={() => setFilter(Status.AVAILABLE)}
      >
        {Status.AVAILABLE}
      </button>
      <button
        className={`filter-button border-4 border-transparent rounded-lg px-4 h-8 mr-2 mb-2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)] ${
          filter === Status.RESERVED &&
          'border-4 border-dashed border-l-orange-300 border-t-orange-300 border-r-orange-300 border-b-orange-300 shadow-none'
        }`}
        onClick={() => setFilter(Status.RESERVED)}
      >
        {Status.RESERVED}
      </button>
      <button
        className={`filter-button border-4 border-transparent rounded-lg px-4 h-8 mr-2 mb-2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)] ${
          filter === Status.BOUGHT &&
          'border-4 border-dashed border-l-red-500 border-t-red-500 border-r-red-500 border-b-red-500 shadow-none'
        }`}
        onClick={() => setFilter(Status.BOUGHT)}
      >
        {Status.BOUGHT}
      </button>
    </div>
  );
};

export default GiftFilter;
