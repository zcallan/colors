import NextDocument, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class Document extends NextDocument {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage( App => props => sheet.collectStyles( <App {...props} /> ));
    const styles = sheet.getStyleElement();

    return { ...page, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui" />
          <meta name="author" content="Callan Delbridge" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Color Names" />
          <meta name="theme-color" content="#AA24D2" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Color Names" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="msapplication-TileImage" content="/.png" />
          <meta name="msapplication-TileColor" content="#F2F2F2" />
          <meta name="msapplication-navbutton-color" content="#AA24D2" />

          <link rel="manifest" href="./static/manifest.json" />

          <link rel="icon" type="image/png" href="./static/favicon.png" />

          <link rel="stylesheet" type="text/css" href="./static/normalize.min.css" async defer />
          <link rel="stylesheet" type="text/css" href="./static/nprogress.min.css" async defer />
        </Head>

        <body>
          <Main />
          <NextScript />

          <script type="text/javascript" defer src="https://use.fontawesome.com/releases/v5.7.2/js/all.js" integrity="sha384-0pzryjIRos8mFBWMzSSZApWtPl/5++eIfzYmTgBBmXYdhvxPc+XcFEk+zJwDgWbP" crossOrigin="anonymous" />
          <script type="text/javascript" defer src="./static/ntc.js" />
        </body>
      </html>
    );
  }
}

export default Document;
