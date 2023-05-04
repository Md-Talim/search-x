import { ReactNode, useState, useEffect } from 'react';
import ThemeToggleButton from './ThemeToggleButton';

interface Props {
  children?: ReactNode;
}

const NavBar = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);

    return () => {};
  }, []);

  return (
    <>
      <header className='mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10'>
        <nav className='flex items-center justify-between'>
          <h1 className='text-3xl'>SearchX</h1>
          <div className='hidden w-full md:block'>{children}</div>
          <ul className='flex items-center gap-4'>
            <li>
            {mounted && <ThemeToggleButton />}
            </li>
          </ul>
        </nav>
        <div className='block w-full md:hidden'>{children}</div>
      </header>
    </>
  );
};

export default NavBar;
