import GiftDetails from '@/components/GiftDetails';
import GiftEdit from '@/components/GiftEdit';
import TopMenu from '@/components/TopMenu';
import { getGift } from '@/firebase/crudUtils';
import { Metadata } from 'next';
import Image from 'next/image';
import icon404 from '@/assets/icon404.svg';

export const metadata: Metadata = {
  title: 'Gifter | Gift Details',
  description: 'Gift Details',
};

const NoGiftError = () => {
  return (
    <>
      <Image
        src={icon404}
        alt="404 error icon"
        height={50}
        width={50}
        className="m-10"
      />
      <p>Sorry, no gift with this ID was found in our database </p>
    </>
  );
};

type GiftPageProps = {
  searchParams: {
    [key: string]: string;
  };
};

const GiftPage = async ({ searchParams }: GiftPageProps) => {
  const { id } = searchParams;

  const gift = id && (await getGift(id));

  return (
    <>
      <TopMenu extended />
      <main className="flex-1 p-10 flex flex-col justify-center items-center sm:p-2">
        {!gift && <NoGiftError/>}
        {gift && <GiftDetails data={gift} />}
        {/* <GiftEdit data={gift} /> */}
      </main>
    </>
  );
};

export default GiftPage;
