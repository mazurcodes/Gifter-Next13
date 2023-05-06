import Link from 'next/link';

const DashboardMenu = () => {
  return (
    <nav className="dashboard-nav w-60">
      <ul className="flex flex-col gap-3 items-start">
        <Link
          href={'/dashboard'}
          className="py-2 px-6 rounded-lg hover:bg-gray-50"
        >
          General
        </Link>
        <Link
          href={'/dashboard/password'}
          className="py-2 px-6 rounded-lg hover:bg-gray-50"
        >
          Password
        </Link>
        <Link
          href={'/dashboard/wishlist'}
          className="py-2 px-6 rounded-lg hover:bg-gray-50"
        >
          Wishlist
        </Link>
        <Link
          href={'/dashboard/summary'}
          className="py-2 px-6 rounded-lg hover:bg-gray-50"
        >
          Statistics
        </Link>
        <div className="section-divider border-t border-gray-200 w-36 ml-6"></div>
        <Link
          href={'/dashboard/delete'}
          className="py-2 px-6 text-red-600 rounded-lg hover:bg-gray-50"
        >
          Delete account
        </Link>
      </ul>
    </nav>
  );
};

export default DashboardMenu;
