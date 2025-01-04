// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Montserrat:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Brittany+Signature&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-montserrat">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
