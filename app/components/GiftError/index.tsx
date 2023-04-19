import Image from 'next/image';
import icon404 from '@/assets/icon404.svg';

const GiftError = () => {
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

export default GiftError;
