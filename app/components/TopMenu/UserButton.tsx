import Image from 'next/image';
import profileIcon from '@/assets/ProfileIcon.svg';
import { useEffect, useRef, useState } from 'react';
import UserMenu from '@/components/UserMenu';

const UserButton = () => {
  const [isOpen, setOpen] = useState(false);
  
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e : MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  const handleClick = () => {
    setOpen(!isOpen)
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div className="user-button-wrapper relative" role="presentation" ref={wrapperRef}>
      <button className="user-button" role='menuitem' onClick={handleClick}>
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
