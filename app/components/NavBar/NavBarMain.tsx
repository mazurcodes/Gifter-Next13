import Image from 'next/image';
import Link from 'next/link';
import profileIcon from '@/assets/ProfileIcon.svg';

const NavBarMain = () => {
  return (
    <nav className="flex justify-end items-center p-3 text-orange-100">
      <ul className="flex items-center">
        <li className="p-2">
          <Link href="/profile">
            <Image src={profileIcon} alt="profile icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarMain;
