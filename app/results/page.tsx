import GiftList from '@/components/GiftList';
import TopMenu from '@/components/TopMenu';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gifter | Wishlist',
  description: 'Wishlist for user',
};

const ResultsPage = () => {
  return (
    <>
      <TopMenu extended />
      <main className="flex-1">
        <h2 className="text-center">
          Result for bartek@bartekmazur.dev
        </h2>
        <GiftList />
      </main>
    </>
  );
};

export default ResultsPage;
