import Image from 'next/image';
import { useTheme } from 'next-themes';
import { moon, sun } from '@/assets';

const ThemeToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      <Image
        src={currentTheme === 'dark' ? sun : moon}
        alt='theme toggle image'
        className='aspect-square w-9'
      />
    </button>
  );
};

export default ThemeToggleButton;
