// pages/_app.tsx
import 'tailwindcss/tailwind.css'; // Make sure Tailwind CSS is installed
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
