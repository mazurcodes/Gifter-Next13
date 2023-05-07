'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardMobileMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="dashboard-mobile-nav absolute top-10 left-0 w-full border rounded-md text-sm bg-white z-50">
      <ul className="flex flex-col gap-3 items-start py-3">
        <Link
          href={'/dashboard'}
          className={`${
            pathname === '/dashboard' && 'font-bold'
          } py-2 px-6 rounded-lg hover:bg-gray-50`}
        >
          General
        </Link>
        <Link
          href={'/dashboard/password'}
          className={`${
            pathname === '/dashboard/password' && 'font-bold'
          } py-2 px-6 rounded-lg hover:bg-gray-50`}
        >
          Password
        </Link>
        <Link
          href={'/dashboard/wishlist'}
          className={`${
            pathname === '/dashboard/wishlist' && 'font-bold'
          } py-2 px-6 rounded-lg hover:bg-gray-50`}
        >
          Wishlist
        </Link>
        <Link
          href={'/dashboard/summary'}
          className={`${
            pathname === '/dashboard/summary' && 'font-bold'
          } py-2 px-6 rounded-lg hover:bg-gray-50`}
        >
          Statistics
        </Link>
        <div className="section-divider border-t border-gray-200 w-36 ml-6"></div>
        <Link
          href={'/dashboard/delete'}
          className={`${
            pathname === '/dashboard/delete' && 'font-bold'
          }  text-red-600 py-2 px-6 rounded-lg hover:bg-gray-50`}
        >
          Delete account
        </Link>
      </ul>
    </nav>
  );
};

export default DashboardMobileMenu;
