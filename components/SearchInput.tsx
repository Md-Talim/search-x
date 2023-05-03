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
    <form className='mx-auto flex items-center gap-4 md:w-3/5 '>
      <input
        placeholder='Search...'
        className='mx-auto block w-full rounded-lg px-6 py-4 text-dark shadow-lg focus:outline-none'
        ref={inputRef}
        required
      />
      <button
        onClick={submit}
        className='rounded-lg bg-primary px-6 py-4 text-lighter'
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
