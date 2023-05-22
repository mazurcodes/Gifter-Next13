'use client';

import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import searchMiniIcon from '@/assets/SearchMiniIcon.svg';
import { useRouter } from 'next/navigation';
import { getSearchByEmailHref } from '@/utils/server';

const SearchForm = () => {
  const [search, setSearch] = useState<string>('');

  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const href = getSearchByEmailHref(search);
    router.push(href);
  };

  return (
    <form
      role="form"
      className="flex flex-col items-center sm:px-3"
      onSubmit={handleSubmit}
    >
      <h1 className="logo font-black text-9xl sm:text-7xl text-center text-orange-500">
        Gifter
      </h1>
      <p className="p-4 font-light">Search for a wishlist by email</p>
      <div className="relative flex gap-3 sm:flex-col sm:w-full">
        <Image
          className="absolute top-3 left-3 z-10 opacity-50"
          src={searchMiniIcon}
          alt="magnifying glass incon"
          width={18}
          height={18}
        />
        <input
          autoComplete="off"
          id="search"
          name="search"
          className="w-96 sm:w-full border rounded-md p-2 pl-10 relative focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
          type="email"
          value={search}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <button
          type="submit"
          className="p-2 px-3 text-center bg-orange-500 rounded-md text-white text-base"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
