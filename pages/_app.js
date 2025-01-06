// pages/_app.js
import '../app/globals.css'; // Adjust the path based on your project structure

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
