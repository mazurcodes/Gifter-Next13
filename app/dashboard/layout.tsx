import TopMenu from '@/components/TopMenu';

export const metadata = {
  title: 'Gifter | Gifts made easy',
  description: 'Gifter app for those that want to receive meaningful gifts',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopMenu extended />
      <main className="flex-1 p-10 flex">
        {/* <DashboardMenu /> */}
        {children}
      </main>
    </>
  );
}
