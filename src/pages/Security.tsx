import * as React from 'react';
import Layout from '../components/Layout/Layout';
import { SecurityCards } from '../components/Sections/SecurityCards';
import { PlatziSecurity } from '../components/Sections/PlatziSecurity';
import { UdemySecurity } from '../components/Sections/UdemySecurity';
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

                    <SecurityCards />
                    <PlatziSecurity />
                    <UdemySecurity />

                </>

            </Layout>
        </>
    );
}

export default Security;