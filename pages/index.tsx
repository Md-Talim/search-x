import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className='absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2'>
        <form className=''>
          <input
            placeholder='Search...'
            className='mx-auto block w-1/3 rounded-lg px-6 py-4 text-[#777] shadow-lg focus:outline-none'
          />
        </form>
      </main>
    </>
  );
}
