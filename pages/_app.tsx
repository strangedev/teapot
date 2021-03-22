import { AppProps } from 'next/dist/next-server/lib/router/router';
import { NotificationProvider } from '../components/NotificationProvider';
import { theme } from '../theme';
import { ThemeProvider } from 'styled-components';
import React, { ReactElement } from 'react';
import '../styles/global.css';

const App = function ({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={ theme }>
      <NotificationProvider>
        <Component { ...pageProps } />
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
