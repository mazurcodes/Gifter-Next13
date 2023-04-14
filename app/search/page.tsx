import GiftList from '@/components/GiftList';
import TopMenu from '@/components/TopMenu';
import { Metadata } from 'next';
import { getAllGifts } from '@/firebase/crudUtils';

export const metadata: Metadata = {
  title: 'Gifter | Wishlist',
  description: 'Wishlist for user',
};

type ResultsPageProps = {
  searchParams: {
    [key: string]: string;
  };
};

const ResultsPage = async ({ searchParams }: ResultsPageProps) => {
  const { email } = searchParams;

  const gifts = await getAllGifts(email);

  return (
    <>
      <TopMenu extended />
      <main className="flex-1 p-10">
        <h2 className="top-menu-header font-semibold text-lg">
          Wishlist for:{' '}
          <span className="font-normal text-orange-500">{email}</span>
        </h2>
        <GiftList data={gifts} />
      </main>
    </>
  );
};

export default ResultsPage;