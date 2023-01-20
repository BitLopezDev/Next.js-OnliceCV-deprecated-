import * as React from 'react';
import Layout from '../components/Layout/Layout';
import { Section4 } from '../components/Sections/Section4';
import { Section5 } from '../components/Sections/Section5';
import Section3 from '../components/Sections/Section3';
import Head from 'next/head';
import '../scripts/scripts';
import './../../node_modules/bootstrap/dist/css/bootstrap.css';
const FullStack = () => {
    return (
        <>
        <Head>
            <title>Labs | Next.js</title>
        </Head>
            <Layout>
              
                <Section4 />
                <Section5 />
            </Layout>
        </>
    );
}

export default FullStack;