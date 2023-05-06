'use client';
import { useTriggerOnBlur } from '@/utils/client';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import DashboardMobileMenu from '../DashboardMobileMenu';

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
      className="p-2 px-3 border-2 border-orange-500 rounded-md relative hidden sm:block"
    >
      <p>{currentLinkName}</p>
      {isOpen && <DashboardMobileMenu />}
    </div>
  );
};

export default DashboardMobileMenuBtn;
