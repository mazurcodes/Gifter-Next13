import TopMenu from '@/components/TopMenu';

export const metadata = {
  title: 'Gifter | Login',
  description: 'Login to your account for full Gifter functionality',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopMenu extended />
      <main className="flex-auto flex flex-col justify-center items-center">
        {children}
      </main>
    </>
  );
}
