import Image from 'next/image';
import { useTheme } from 'next-themes';
import { sun, moon } from '@/assets';

const ThemeToggleButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark')
      }
    >
      {resolvedTheme === 'dark' ? (
        <Image
          src={sun}
          alt='theme toggle image'
          className='aspect-square w-9'
        />
      ) : (
        <Image
          src={moon}
          alt='theme toggle image'
          className='aspect-square w-9'
        />
      )}
    </button>
  );
};

export default ThemeToggleButton;
