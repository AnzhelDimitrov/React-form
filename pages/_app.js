import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
const router = useRouter();

  return (
    <AnimatePresence mode='wait' initial={false}>
      <Component key={router.pathname} {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
