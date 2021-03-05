import React from 'react';
import Head from 'next/head';
import theme from '../src/config/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'next-auth/client'


function MyApp({ Component, pageProps }) {
  return <React.Fragment>

    <Head>
      <title>{process.env.appName}</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={5} autoHideDuration={5000}>
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </SnackbarProvider>
    </ThemeProvider>
  </React.Fragment>
}

export default MyApp
