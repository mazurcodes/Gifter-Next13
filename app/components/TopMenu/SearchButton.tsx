'use client';

import Image from 'next/image';
import searchIcon from '@/assets/SearchIcon.svg';
import { useRef, useState } from 'react';
import { useTriggerOnBlur } from '@/utils/client';

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
        <Image
          src={searchIcon}
          alt="User account icon"
          height={30}
          width={30}
        />
      </button>
      {/* TODO: add SearchMenu component below */}
      {isOpen && null}
    </div>
  );
};

export default SearchButton;
