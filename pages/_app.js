import Layout from '@/components/Layout';
import '@/styles/globals.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}
