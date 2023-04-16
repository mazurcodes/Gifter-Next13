import AuthFormContainer from '@/components/AuthForm';
import TopMenu from '@/components/TopMenu';

const AuthPage = () => {
  return (
    <>
      <TopMenu extended />
      <main className="flex-auto flex flex-col justify-center items-center">
        <AuthFormContainer />
      </main>
    </>
  );
};

export default AuthPage;
