import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // หรือไฟล์ CSS อื่นๆ ที่คุณมี

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
