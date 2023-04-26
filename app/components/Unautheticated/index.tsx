import Link from 'next/link';

const Unauthenticated = () => {
  return (
    <>
      <h2>Oh, hello stranger...</h2>
      <p>
        Please <Link href={'/auth'}>Login or Signup</Link>
      </p>
    </>
  );
};

export default Unauthenticated;
