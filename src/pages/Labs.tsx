import * as React from 'react';
import Layout from '../components/Layout/Layout';
import { Section4 } from '../components/Sections/Section4';
import { Section5 } from '../components/Sections/Section5';
import Section3 from '../components/Sections/Section3';
import '../scripts/scripts';
import './../../node_modules/bootstrap/dist/css/bootstrap.css';
const FullStack = () => {
    return (
        <>
            <Layout>
              
                <Section4 />
                <Section5 />
            </Layout>
        </>
    );
}

export default FullStack;