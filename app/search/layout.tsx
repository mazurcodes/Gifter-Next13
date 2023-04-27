import TopMenu from '@/components/TopMenu';

export const metadata = {
  title: 'Gifter | Search results',
  description: "Search results with a friend's wishlist",
};

export default function SearchLayout({
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
