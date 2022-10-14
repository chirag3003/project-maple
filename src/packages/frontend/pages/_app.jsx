import '@tremor/react/dist/esm/tremor.css';
import '../styles/globals.css';

function MyApp(props) {
    const { Component, pageProps, router } = props;
    const getLayout = Component.getLayout || ((page) => page);
    return getLayout(<Component {...pageProps} key={router.route} />);
}

export default MyApp;
