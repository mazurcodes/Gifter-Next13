'use client';

import { usePathname } from 'next/navigation';
import NavBarSearch from '@/components/NavBar/NavBarSearch';
import NavBarMain from './NavBarMain';

const NavBar = () => {
  const pathname = usePathname();

  if (pathname === '/') return <NavBarMain />;
  return <NavBarSearch />;
};

export default NavBar;
