import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../Navbar/page';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Component {...pageProps} />
      {/* Footer or additional sections can be added here */}
    </div>
  );
}

export default MyApp;
