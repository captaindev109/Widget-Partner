import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyles from '@/styles/Global';
import React from 'react';
import { ChildrenReturnType } from '@/types/types';

interface ApplicationThemeProviderProps {
  children?: ChildrenReturnType;
  theme: DefaultTheme;
}

const ApplicationThemeProvider = ({ children, theme }: ApplicationThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default ApplicationThemeProvider;
