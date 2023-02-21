import * as React from 'react';
import Layout from '../components/Layout/Layout';
import { Section7 } from '../components/Sections/Section7';
import { Section8 } from '../components/Sections/Section8';
import { Section9 } from '../components/Sections/Section9';
import Head from 'next/head';
import './../../node_modules/bootstrap/dist/css/bootstrap.css';


const Security = () => {
    React.useEffect(() => {

    })
    return (
        <>
            <Head>
                <title>CV Online | Cybersecurity</title>
            </Head>
            <Layout>

                <>

                    <Section7 />
                    <Section8 />
                    <Section9 />

                </>

            </Layout>
        </>
    );
}

export default Security;