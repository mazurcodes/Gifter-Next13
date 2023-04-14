import DashboardMenu from '@/components/Dashboard/DashboardMenu';
import TopMenu from '@/components/TopMenu';

export const metadata = {
  title: 'Gifter | Dashboard',
  description: 'Dashboard for Gifter',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopMenu extended />
      <main className="flex-1 p-8 flex mt-24">
        <DashboardMenu />
        {children}
      </main>
    </>
  );
}
