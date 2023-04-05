'use client';

import { ChangeEvent, useState } from 'react';

const TopMenuSearch = () => {
  const [search, setSearch] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  //TODO: write search function for the search button

  return (
    <div
      role="searchbox"
      className="wrapper absolute top-15 right-0 border rounded-md w-64 text-sm bg-white z-50"
    >
      <div className="topmenu-search-wrapper p-6">
        <label
          className="capitalize font-semibold text-orange-500 text-xs"
          htmlFor="topmenu-input"
        >
          User wishlist:
        </label>
        <input
          id="topmenu-input"
          name="topmenu-input"
          className=" w-full border rounded-md mt-3 p-1 pl-2 relative focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
          type="email"
          value={search}
          onChange={handleChange}
          placeholder="Email"
        />
        <button className="search-button mt-3 p-2 bg-orange-500 text-white rounded-lg ">
          Search
        </button>
      </div>
    </div>
  );
};

export default TopMenuSearch;
