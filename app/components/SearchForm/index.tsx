'use client';

import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import searchIcon from '@/assets/SearchIcon.svg';
import { useRouter } from 'next/navigation';

const getSearchByEmailHref = (email: string) => {
  return '/search?email=' + encodeURIComponent(email);
};

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
      className="flex flex-col items-center"
      onSubmit={handleSubmit}
    >
      <h1 className="logo font-black text-9xl text-center text-orange-500">
        Gifter
      </h1>
      <p className="p-4 font-light">Search for a wishlist by email</p>
      <div className="relative flex">
        <Image
          className="absolute top-2 left-2 z-10 opacity-50"
          src={searchIcon}
          alt="magnifying glass incon"
          width={18}
          height={18}
        />
        <input
          id="search"
          name="search"
          className=" w-96 border rounded-md p-1 pl-10 relative focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
          type="email"
          value={search}
          onChange={handleChange}
          placeholder="Email"
          autoFocus
          required
        />
        <button
          type="submit"
          className="ml-3 px-3 text-center bg-orange-500 rounded-md text-white text-base"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
