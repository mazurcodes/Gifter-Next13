import GiftEdit from '@/components/GiftEdit';

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
