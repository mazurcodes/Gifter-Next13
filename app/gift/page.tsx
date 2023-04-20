'use client';
import GiftDetails from '@/components/GiftDetails';
import GiftEdit from '@/components/GiftEdit';
import TopMenu from '@/components/TopMenu';
import GiftError from '@/components/GiftError';
import { useGift } from '@/firebase/crudUtils';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';

type GiftPageProps = {
  searchParams: {
    [key: string]: string;
  };
};

const GiftPage = ({ searchParams }: GiftPageProps) => {
  const { id } = searchParams;
  const [user] = useAuthState(auth);
  const [gift, loading, error] = useGift(id);

  const isOwner = gift?.ownerEmail === user?.email;

  return (
    <>
      <TopMenu extended />
      <main className="flex-1 p-10 flex flex-col justify-center items-center sm:p-2">
        {gift && !isOwner && <GiftDetails data={gift} />}
        {gift && isOwner && <GiftEdit data={gift} id={id} />}
        {(!loading || error) && !gift && <GiftError />}
      </main>
    </>
  );
};

export default GiftPage;
