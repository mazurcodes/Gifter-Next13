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
      <h2 className="top-menu-left logo font-black text-4xl text-orange-500">
        Gifter
      </h2>
      <div className="top-menu-right flex gap-4">
        <SearchButton/>
        <UserButton />
      </div>
    </div>
  );
};

const TopMenu = ({ extended }: TopMenuProps) => {
  return extended ? <TopMenuExtended /> : <TopMenuPimary />;
};
export default TopMenu;
