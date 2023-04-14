import Link from 'next/link';

const DashboardMenu = () => {
  return (
    <nav className='dashboard-nav border-r border-gray-100'>
      <ul className="flex flex-col gap-3 pr-8">
        <Link href={'/dashboard'} className="py-2 px-6 rounded-lg hover:bg-gray-50">Account</Link>
        <Link href={'/dashboard/wishlist'} className="py-2 px-6 rounded-lg hover:bg-gray-50">Wishlist</Link>
        <Link href={'/dashboard/summary'} className="py-2 px-6 rounded-lg hover:bg-gray-50">Statistics</Link>
      </ul>
    </nav>
  );
};

export default DashboardMenu;
