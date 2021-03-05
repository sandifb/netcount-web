import { useState, useEffect, React, Dnc } from 'libraries';
import Head from 'next/head';
import theme from '../src/config/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';
import { AuthContext } from "./../src/contexts/auth";

function MyApp({ Component, pageProps }) {

  const [authTokens, setAuthTokens] = useState('');
  const setTokens = (data) => {
    //set auth if Router.push
    setAuthTokens(data);
  }


  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    let hostenv = localStorage.getItem('next.hostenv');
    if (hostenv) {
      let next = Dnc(hostenv);
      // console.log("NEXT" + JSON.stringify(next.user));
      let user = JSON.stringify(next.user);
      //set auth if refresh
      setAuthTokens(JSON.parse(user));
    }

  }, []);



  return <React.Fragment>
    <Head>
      <title>{process.env.appName}</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={5} autoHideDuration={5000}>
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
          <Component {...pageProps} auth={authTokens}/>
        </AuthContext.Provider>
      </SnackbarProvider>
    </ThemeProvider>
  </React.Fragment>
}

export default MyApp
