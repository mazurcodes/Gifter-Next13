import Link from 'next/link';
import Image from 'next/image';
import searchIcon from '@/assets/SearchIcon.svg';
import profileIcon from '@/assets/ProfileIcon.svg';

const NavBarLogo = () => {
  return (
    <nav className="flex justify-between items-center p-3">
      <h2 className="logo font-black text-4xl">Gifter</h2>
      <ul className="flex items-center">
        <li className="p-2">
          <Link href="/" data-testid='navbar search'>
            <Image src={searchIcon} alt="search icon" width={40} height={40}/>
          </Link>
        </li>
        <li className="p-2">
          <Link href="/profile"  data-testid='navbar profile'>
            <Image src={profileIcon} alt="profile icon"  width={40} height={40}/>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarLogo;
