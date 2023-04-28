'use client';

import Image from 'next/image';
import searchIcon from '@/assets/SearchIcon.svg';
import { useRef, useState } from 'react';
import { useTriggerOnBlur } from '@/utils/client';
import TopMenuSearch from '@/components/TopMenuSearch';

const SearchButton = () => {
  const [isOpen, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  useTriggerOnBlur(wrapperRef, () => setOpen(false));

  return (
    <div
      className="search-button-wrapper relative"
      role="presentation"
      ref={wrapperRef}
    >
      <button className="search-button" role="menuitem" onClick={handleClick}>
        <Image src={searchIcon} alt="Search icon" height={30} width={30} />
      </button>
      {isOpen && <TopMenuSearch close={() => setOpen(false)} />}
    </div>
  );
};

export default SearchButton;
