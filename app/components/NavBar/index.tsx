'use client';

import { usePathname } from 'next/navigation';
import NavBarLogo from '@/components/NavBar/NavBarLogo';
import NavBarMain from './NavBarMain';

const NavBar = () => {
  const pathname = usePathname();

  if (pathname === '/') return <NavBarMain />;
  return <NavBarLogo />

  
};

export default NavBar;
