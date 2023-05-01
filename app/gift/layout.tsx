import TopMenu from '@/components/TopMenu';

export const metadata = {
  title: 'Gifter | Gift',
  description: 'Gift',
};

export default function GiftLayout({
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
