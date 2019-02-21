import React from 'react';
import NextApp, { Container } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import { createGlobalStyle } from 'styled-components';

Router.events.on( 'routeChangeStart', () => NProgress.start());
Router.events.on( 'routeChangeComplete', () => NProgress.done());
Router.events.on( 'routeChangeError', () => NProgress.done());

const GlobalStyle = createGlobalStyle`
  body,
  html,
  #__next {
    height: 100%;
  }

  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }

  * {
    box-sizing: border-box;
  }

  @-ms-viewport{
    width: device-width;
  }
`;

class App extends NextApp {
  // eslint-disable-next-line no-unused-vars
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if ( Component.getInitialProps )
      pageProps = await Component.getInitialProps( ctx );

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <GlobalStyle />

        <Component {...pageProps} />
      </Container>
    );
  }
}

export default App;
