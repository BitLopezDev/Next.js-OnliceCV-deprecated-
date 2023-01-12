import { AppProps } from 'next/app';
import 'semantic-ui-css/semantic.min.css';
import '../styles/global.css';
import Head  from 'next/head';
import Headf from './../components/Head/Headf'
const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
        <Headf ogType={'website'} />
            <Component {...pageProps} />
        </>
    )
}
export default MyApp;