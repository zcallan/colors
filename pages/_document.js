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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="/static/favicon.png" />

          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,600" async defer />

          <link rel="stylesheet" type="text/css" href="/static/sanitize.min.css" async defer />
          <link rel="stylesheet" type="text/css" href="/static/normalize.min.css" async defer />
          <link rel="stylesheet" type="text/css" href="/static/nprogress.min.css" async defer />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default Document;
