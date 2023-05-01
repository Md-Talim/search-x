import NavBar from '@/components/NavBar';
import SearchInput from '@/components/SearchInput';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className='absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2'>
        <SearchInput />
      </main>
    </>
  );
}
