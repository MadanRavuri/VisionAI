// Enforce dark mode only
import React from 'react';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  return <>{children}</>;
};