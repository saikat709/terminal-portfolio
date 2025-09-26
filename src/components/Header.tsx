import { useEffect, useState } from 'react';
import { Wifi, BatteryFull, BatteryCharging, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [time, setTime] = useState('');
  const [battery, setBattery] = useState(100);
  const [charging, setCharging] = useState(false);

  // Time updater
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    update();
    const interval = setInterval(update, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  // Battery API (if available)
  useEffect(() => {
    type BatteryManager = {
      level: number;
      charging: boolean;
      addEventListener: (type: string, listener: () => void) => void;
    };
    const nav = navigator as Navigator & { getBattery?: () => Promise<BatteryManager> };
    if (typeof nav.getBattery === 'function') {
      nav.getBattery().then((bat) => {
        setBattery(Math.round(bat.level * 100));
        setCharging(bat.charging);
        bat.addEventListener('levelchange', () => setBattery(Math.round(bat.level * 100)));
        bat.addEventListener('chargingchange', () => setCharging(bat.charging));
      });
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className="w-full h-8 px-4 flex items-center justify-between bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 text-xs select-none fixed top-0 left-0 z-40" style={{height: '2.2rem'}}>
      {/* Left: Time */}
      <div className="font-mono text-zinc-700 dark:text-zinc-200 font-medium">
        {time}
      </div>
      {/* Right: Status icons */}
      <div className="flex items-center space-x-3">
        <Wifi className="w-4 h-4 text-zinc-500 dark:text-zinc-300" />
        {charging ? (
          <BatteryCharging className="w-4 h-4 text-green-500" />
        ) : (
          <BatteryFull className="w-4 h-4 text-zinc-500 dark:text-zinc-300" />
        )}
        <span className="min-w-[2ch] text-zinc-700 dark:text-zinc-200 tabular-nums">{battery}%</span>
        <button
          onClick={toggleTheme}
          className="ml-2 p-1 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="w-4 h-4 text-zinc-700" />
          ) : (
            <Sun className="w-4 h-4 text-yellow-400" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
