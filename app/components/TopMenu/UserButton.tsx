'use client';

import Image from 'next/image';
import profileIcon from '@/assets/ProfileIcon.svg';
import { useRef, useState } from 'react';
import UserMenu from '@/components/UserMenu';
import { useTriggerOnBlur } from '@/utils/client';

const UserButton = () => {
  const [isOpen, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  useTriggerOnBlur(wrapperRef, () => setOpen(false));

  return (
    <div
      className="user-button-wrapper relative"
      role="presentation"
      ref={wrapperRef}
    >
      <button className="user-button" role="menuitem" onClick={handleClick}>
        <Image
          src={profileIcon}
          alt="User account icon"
          height={30}
          width={30}
        />
      </button>
      {isOpen && <UserMenu />}
    </div>
  );
};

export default UserButton;
