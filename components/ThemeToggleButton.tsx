import Image from 'next/image';
import { useTheme } from 'next-themes';
import { moon, sun } from '@/assets';
import { useEffect, useState } from 'react';

const ThemeToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [icon, setIcon] = useState(currentTheme === 'dark' ? sun : moon);

  useEffect(() => {
    setIcon(theme === 'dark' ? sun : moon);
  }, [theme]);

  return (
    <button
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      <Image
        src={icon}
        alt='theme toggle image'
        className='aspect-square w-9'
      />
    </button>
  );
};

export default ThemeToggleButton;
