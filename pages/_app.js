import "../styles/globals.css";
import Layoutt from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
function MyApp({ Component, pageProps }) {
  return (
    <Layoutt>
      <Component {...pageProps} />
    </Layoutt>
  );
}

export default MyApp;
