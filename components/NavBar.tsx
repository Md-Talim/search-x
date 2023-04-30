import ThemeToggleButton from './ThemeToggleButton';

const NavBar = () => {
  return (
    <nav className='container mx-auto flex items-center justify-between py-10'>
      <h1 className='text-3xl'>SearchX</h1>
      <ul className='flex items-center gap-4'>
        <li>
          <ThemeToggleButton />
        </li>
        <li>Github</li>
      </ul>
    </nav>
  );
};

export default NavBar;
