'use client';

import React, { useEffect, useState } from 'react';
import Sun from '@/static/Icons/Sun.svg';
import Moon from '@/static/Icons/Moon.svg';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('selectedTheme');
      const prefersDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
      setIsDark(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme);
    localStorage.setItem('selectedTheme', nextTheme ? 'dark' : 'light');
  };

  return (
    <div className="theme-toggle-container fixed top-4 left-4 z-9999">
      <input
        type="checkbox"
        id="toggle"
        className="toggle-checkbox"
        checked={isDark}
        onChange={toggleTheme}
      />
      <label htmlFor="toggle" className="toggle-label">
        <Sun className="icon sun-icon" />
        <Moon className="icon moon-icon" />
      </label>
    </div>
  );
};

export default ThemeToggle;
