import DashboardMenu from '@/components/Dashboard/DashboardMenu';
import DashboardMobileMenuBtn from '@/components/Dashboard/DashboardMobileMenuBtn';
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
      <main className="flex-1 p-8 gap-8 flex mt-24 sm:flex-col sm:mt-0 sm:p-5">
        <DashboardMobileMenuBtn />
        <DashboardMenu />
        {children}
      </main>
    </>
  );
}
