import Header from '../components/header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <html lang="en">
        <Header />
        <Component {...pageProps} />
      </html>
    </>
  );
}

export default MyApp;
