'use client';
import { useTriggerOnBlur } from '@/utils/client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import DashboardMobileMenu from '@/components/Dashboard/DashboardMobileMenu';
import DropdownIcon from '@/assets/DropdownIcon.svg';

const DashboardMobileMenuBtn = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useTriggerOnBlur(wrapperRef, () => setIsOpen(false));

  const currentPath = pathname.substring(pathname.lastIndexOf('/') + 1);
  const currentLinkName =
    currentPath === 'dashboard'
      ? 'General'
      : currentPath[0].toUpperCase() + currentPath.substring(1);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      ref={wrapperRef}
      onClick={handleClick}
      className="p-2 px-4 border-2 border-orange-500 rounded-md relative hidden sm:block"
    >
      <p>{currentLinkName}</p>
      <Image
        src={DropdownIcon}
        alt="dropdown icon"
        className={`absolute top-2 right-3 ${isOpen && 'rotate-180'}`}
        width={26}
      />
      {isOpen && <DashboardMobileMenu />}
    </div>
  );
};

export default DashboardMobileMenuBtn;
