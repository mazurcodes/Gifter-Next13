import TopMenu from '@/components/TopMenu';
import SearchForm from '@/components/SearchForm';

export default function Home() {
  return (
    <>
      <TopMenu />
      <main className="flex-auto">
        <SearchForm />
      </main>
    </>
  );
}
