import '../styles/globals.css'
import { AuthProvider } from '../contexts/auth'
import Frontend from '../components/layout/frontend';

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return <Frontend>{page}</Frontend>;
    };

  return renderWithLayout(
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp
