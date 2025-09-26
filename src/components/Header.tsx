import { useEffect, useState } from 'react';

const Header = () => {
  const [ theme, setTheme ] = useState('light');
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');

    console.log(`Theme changed to ${theme === 'light' ? 'dark' : 'light'}`);
  };

  return (
    <div>
      
    </div>
  )
};

export default Header;
