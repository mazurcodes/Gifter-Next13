import AuthForm from '@/components/AuthForm';
import TopMenu from '@/components/TopMenu';

const AuthPage = () => {
  return (
    <>
      <TopMenu extended />
      <main className="flex-auto flex flex-col justify-center items-center">
        <AuthForm/>
      </main>
    </>
  );
};

export default AuthPage;
