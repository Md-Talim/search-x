import { ReactNode } from 'react';
import ThemeToggleButton from './ThemeToggleButton';

interface Props {
  children?: ReactNode;
}

const NavBar = ({ children }: Props) => {
  return (
    <nav className='container mx-auto flex items-center justify-between py-10'>
      <h1 className='text-3xl'>SearchX</h1>
      {children}
      <ul className='flex items-center gap-4'>
        <li>
          <ThemeToggleButton />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
