import GiftDetails from '@/components/GiftDetails';
import GiftEdit from '@/components/GiftEdit';
import TopMenu from '@/components/TopMenu';
import { getGift } from '@/firebase/crudUtils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gifter | Gift Details',
  description: 'Gift Details',
};

type GiftPageProps = {
  searchParams: {
    [key: string]: string;
  };
};

const GiftPage = async ({ searchParams }: GiftPageProps) => {
  const { id } = searchParams;

  const gift = await getGift(id);


  return (
    <>
      <TopMenu extended />
      <main className="flex-1 p-10 flex justify-center items-center sm:p-2">
        {gift && <GiftDetails data={gift}/>}
        {/* <GiftEdit data={gift} /> */}
      </main>
    </>
  );
};

export default GiftPage;
