import TopMenu from '@/components/TopMenu';

export const metadata = {
  title: 'Gifter | Signup',
  description: 'Create new account and gain full Gifter functionality',
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopMenu extended />
      {children}
    </>
  );
}
