import { AppProps } from 'next/app';
import 'semantic-ui-css/semantic.min.css';
import '../styles/global.css';
import '../styles/fullstack.module.scss';

import Head from 'next/head';
import Headf from './../components/Head/Headf';
import { useLayoutEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import Script from 'next/script';
const BundleBootstrap = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.lady.bundle.min.js.";
const Bootcss = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
const FullStackCss = '../styles/fullstack.module.scss'
const anonymous = "anonymous";

const MyApp = ({ Component, pageProps }: AppProps) => {

    useLayoutEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      /*  require("../scripts/common.js");
        require("../scripts/fullstack.js");
        require("../scripts/Libs/jquery-3.6.3.min.js");*/
        // require("../styles/index.css");
        // require("../styles/global.css");

    }, []);
    return (
        <React.Fragment>


            <Headf ogType={'website'} >
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href={FullStackCss} rel="stylesheet" />

                    {/*  
                     <link href={FullStackCss} rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin={anonymous} />
                     <Script src={BundleBootstrap} integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin={anonymous} />
                    
                    */}

                </Head>
            </Headf>
            <Component {...pageProps} ></Component>
            

        </React.Fragment>
    )
}
export default MyApp;