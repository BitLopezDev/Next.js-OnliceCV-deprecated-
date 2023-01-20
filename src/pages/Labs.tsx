import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Section1 from '../components/Sections/Section1';
import Section3 from '../components/Sections/Section3';
import '../scripts/scripts';
import './../../node_modules/bootstrap/dist/css/bootstrap.css';
const FullStack = () => {
    return (
        <>
            <Layout>
                <Section3 />
            </Layout>
        </>
    );
}

export default FullStack;