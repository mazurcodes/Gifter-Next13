import GiftList from '@/components/GiftList';
import TopMenu from '@/components/TopMenu';
import { Metadata } from 'next';
import { giftsData } from '@/data/giftsData';


export const metadata: Metadata = {
  title: 'Gifter | Wishlist',
  description: 'Wishlist for user',
};

const ResultsPage = () => {
  return (
    <>
      <TopMenu extended />
      <main className="flex-1 p-10">
        <h2 className="top-menu-header font-semibold text-lg">
          Wishlist for:{' '}
          <span className="font-normal text-orange-500">
            some.email@gmail.com
          </span>
        </h2>
        <GiftList data={giftsData}/>
      </main>
    </>
  );
};

export default ResultsPage;
