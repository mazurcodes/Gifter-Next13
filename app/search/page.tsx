import GiftList from '@/components/GiftList';
import { getAllGifts } from '@/firebase/crudUtils';

type ResultsPageProps = {
  searchParams: {
    [key: string]: string;
  };
};

const ResultsPage = async ({ searchParams }: ResultsPageProps) => {
  const { email } = searchParams;

  const gifts = email && (await getAllGifts(email));

  return (
    <>
      <main className="flex-1 p-10">
        <h2 className="top-menu-header font-semibold text-lg">
          Wishlist for:{' '}
          <span className="font-normal text-orange-500">{email}</span>
        </h2>
        {gifts && <GiftList data={gifts} />}
      </main>
    </>
  );
};

export default ResultsPage;
