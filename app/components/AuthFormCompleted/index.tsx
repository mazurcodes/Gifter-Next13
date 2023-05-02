import Link from 'next/link';

const AuthFormCompleted = ({ email }: { email: string | null | undefined }) => {
  return (
    <div className="wrapper-auth-completed">
      <h3 className="text-center text-xl">
        Welcome <span className="text-orange-500">{email}</span>
      </h3>
      <div className="flex gap-7 mt-7">
        <Link
          href={'/'}
          className="border rounded-md bg-orange-500 text-white text-center p-2 px-4"
        >
          Go to the Main Page
        </Link>
        <Link
          href={'/dashboard'}
          className="border rounded-md bg-orange-500 text-white text-center p-2 px-4"
        >
          Go to the Dashboard
        </Link>
      </div>
    </div>
  );
};

export default AuthFormCompleted;
