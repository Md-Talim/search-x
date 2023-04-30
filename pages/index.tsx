export default function Home() {
  return (
    <>
      <main className='w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <form className=''>
          <input
            placeholder='Search...'
            className='block px-6 py-4 rounded-lg w-1/3 mx-auto shadow-lg focus:outline-none text-[#777]'
          />
        </form>
      </main>
    </>
  );
}
