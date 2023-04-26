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
        className={`filter-button border rounded-lg w-24 mr-2 mb-3 ${
          filter === '' &&
          'border-4 border-dashed border-l-orange-400 border-b-blue-400 border-r-red-500 border-t-green-500 text-gray-700'
        }`}
        onClick={() => setFilter('')}
      >
        All
      </button>
      <button
        className={`filter-button border rounded-md w-24 mr-2 mb-3 ${
          filter === Status.AVAILABLE &&
          'border-4 border-dashed border-green-500'
        }`}
        onClick={() => setFilter(Status.AVAILABLE)}
      >
        {Status.AVAILABLE}
      </button>
      <button
        className={`filter-button border rounded-md w-24 mr-2 mb-3 ${
          filter === Status.RESERVED &&
          'border-4 border-dashed border-orange-300'
        }`}
        onClick={() => setFilter(Status.RESERVED)}
      >
        {Status.RESERVED}
      </button>
      <button
        className={`filter-button border rounded-md w-24 mr-2 mb-3 ${
          filter === Status.BOUGHT && 'border-4 border-dashed border-red-500'
        }`}
        onClick={() => setFilter(Status.BOUGHT)}
      >
        {Status.BOUGHT}
      </button>
    </div>
  );
};

export default GiftFilter;
