import Link from 'next/link';
import Image from 'next/image';
import searchIcon from '@/assets/SearchIcon.svg';
import profileIcon from '@/assets/ProfileIcon.svg';

const NavBarLogo = () => {
  return (
    <nav className="flex justify-between items-center p-3">
      <h1 className="logo font-black text-4xl">Gifter</h1>
      <ul className="flex items-center">
        <li className="p-2">
          <Link href="/">
            <Image src={searchIcon} alt="profile icon" />
          </Link>
        </li>
        <li className="p-2">
          <Link href="/profile">
            <Image src={profileIcon} alt="profile icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarLogo;
