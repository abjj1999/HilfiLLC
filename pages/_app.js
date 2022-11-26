import "../styles/globals.css";
import Layoutt from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }) {
  return (
    <Layoutt>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={false}
        draggable={true}
        progress={undefined}
        theme="light"
      />
      <Component {...pageProps} />
    </Layoutt>
  );
}

export default MyApp;
