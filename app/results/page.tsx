import GiftList from '@/components/GiftList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gifter | Wishlist',
  description: 'Wishlist for user',
};

const ResultsPage = () => {
  return (
    <div className="flex-1">
      <h2 className="text-center">Result for bartek@bartekmazur.dev</h2>
      <GiftList />
    </div>
  );
};

export default ResultsPage;
