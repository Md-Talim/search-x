import Image from 'next/image';
import { useTheme } from 'next-themes';
import { moon, sun } from '@/assets';
import { useEffect, useState } from 'react';

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const initialIcon = theme === 'light' ? moon : sun;
  const [icon, setIcon] = useState(initialIcon);

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
