import { useRouter } from 'next/router';
import { useRef, MouseEvent } from 'react';

const SearchInput = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = (event: MouseEvent) => {
    event.preventDefault();
    const term = inputRef.current?.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <form className='flex flex-col items-center gap-4'>
      <input
        placeholder='Search...'
        className='mx-auto block w-1/3 rounded-lg px-6 py-4 text-[#777] shadow-lg focus:outline-none'
        ref={inputRef}
        required
      />
      <button
        onClick={submit}
        className='rounded-lg bg-blue-500 px-6 py-2 text-white'
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
