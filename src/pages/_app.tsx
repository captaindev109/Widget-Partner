import '../styles/globals.css';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@/apollo/apolloClient';
import ApplicationThemeProvider from '@/providers/ApplicationThemeProvider';
import defaultTheme from '@/theme/theme';
import { GlobalStateProvider } from '@/providers/GlobalStateProvider';
import { DynamicFormProvider } from '@/providers/DynamicFormProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <ApolloProvider client={apolloClient}>
        <ApplicationThemeProvider theme={defaultTheme}>
          <DynamicFormProvider>
            <div id="modal-portal" />
            <Component {...pageProps} />
          </DynamicFormProvider>
        </ApplicationThemeProvider>
      </ApolloProvider>
    </GlobalStateProvider>
  );
}

export default MyApp;
