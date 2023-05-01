'use client';
import GiftDetails from '@/components/GiftDetails';
import GiftEdit from '@/components/GiftEdit';
import GiftError from '@/components/GiftError';
import { useGift } from '@/firebase/crudUtils';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import { useSearchParams } from 'next/navigation';

const GiftPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [user] = useAuthState(auth);
  const [gift, loading, error] = useGift(id || '');

  const isOwner = gift?.ownerEmail === user?.email;

  return (
    <main className="flex-1 p-10 flex flex-col justify-center items-center sm:p-2">
      {gift && !isOwner && <GiftDetails data={gift} />}
      {gift && isOwner && <GiftEdit data={gift} id={id} />}
      {(!loading || error) && !gift && <GiftError />}
    </main>
  );
};

export default GiftPage;
