import React from 'react';

export const useTheme = () => ({ isDark: true });

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  return <>{children}</>;
};