import Link from 'next/link';
import SearchButton from '@/components/TopMenu/SearchButton';
import UserButton from '@/components/TopMenu/UserButton';

type TopMenuProps = {
  extended?: boolean;
};

const TopMenuPimary = () => {
  return (
    <div
      className="flex justify-end items-center py-6 px-10 sm:px-3"
      role="menubar"
    >
      <UserButton />
    </div>
  );
};

const TopMenuExtended = () => {
  return (
    <div
      className="flex justify-between items-center py-6 px-10 sm:px-3"
      role="menubar"
    >
      <Link
        href="/"
        className="top-menu-left logo font-black text-4xl text-orange-500"
        aria-roledescription="gifter logo with link to the main page"
      >
        Gifter
      </Link>
      <div className="top-menu-right flex gap-4">
        <SearchButton />
        <UserButton />
      </div>
    </div>
  );
};

const TopMenu = ({ extended }: TopMenuProps) => {
  return extended ? <TopMenuExtended /> : <TopMenuPimary />;
};
export default TopMenu;
