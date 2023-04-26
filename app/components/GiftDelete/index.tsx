import { deleteGift } from '@/firebase/crudUtils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const GiftDelete = ({ id }: { id: string }) => {
  const [isDelete, setDelete] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    await deleteGift(id);
    router.push('/dashboard/wishlist');
  };

  return (
    <div className="delete-wrapper mt-14">
      <h3>Delete your item:</h3>
      <div
        className={`flex justify-between gap-10 border border-red-700 rounded-md p-4`}
      >
        <button
          type="button"
          tabIndex={13}
          onClick={() => setDelete(!isDelete)}
          className={`p-1 px-3 text-center ${
            isDelete ? 'bg-green-600' : 'bg-red-500'
          } rounded-md text-white text-base  focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed`}
        >
          {isDelete ? 'No!' : 'Delete'}
        </button>
        <button
          type="button"
          tabIndex={14}
          onClick={handleDelete}
          className={`p-1 px-3 text-center bg-red-500 rounded-md text-white text-base  focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed ${
            !isDelete && 'hidden'
          }`}
        >
          I&apos;m sure. Delete!
        </button>
      </div>
    </div>
  );
};

export default GiftDelete;
