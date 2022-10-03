import "../styles/globals.css";
import "@tremor/react/dist/esm/tremor.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
