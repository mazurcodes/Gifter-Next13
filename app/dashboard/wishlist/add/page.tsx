'use client';
import GiftEdit from '@/components/GiftEdit';
import TopMenu from '@/components/TopMenu';

const AddGiftPage = () => {
  return (
    <>
      <div className="form-wrapper flex justify-center flex-1">
        <GiftEdit newGift />
      </div>
    </>
  );
};

export default AddGiftPage;
