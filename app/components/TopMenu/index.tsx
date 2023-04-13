import Link from 'next/link';
import SearchButton from './SearchButton';
import UserButton from './UserButton';

type TopMenuProps = {
  extended?: boolean;
};

const TopMenuPimary = () => {
  return (
    <div className="flex justify-end items-center p-6" role="menubar">
      <UserButton />
    </div>
  );
};

const TopMenuExtended = () => {
  return (
    <div className="flex justify-between items-center p-6" role="menubar">
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
