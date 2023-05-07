import GiftList from '@/components/GiftList';
import { getAllGifts } from '@/firebase/crudUtils';
import { shortEmailAddress } from '@/utils/server';

type SearchPageProps = {
  params: {
    userEmail: string;
  };
};

const SearchPage = async ({ params: { userEmail } }: SearchPageProps) => {
  const email = decodeURIComponent(userEmail);
  const gifts = await getAllGifts(email);
  return (
    <>
      <main className="flex-1 p-10 sm:p-3">
        <h2 className="top-menu-header font-semibold text-lg">
          Wishlist for:{' '}
          <span className="font-normal text-orange-500">
            {email && shortEmailAddress(email, 30)}
          </span>
        </h2>
        {gifts && <GiftList data={gifts} />}
      </main>
    </>
  );
};

export default SearchPage;
