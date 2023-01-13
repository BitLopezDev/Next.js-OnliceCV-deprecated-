import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Section1 from '../components/Sections/Section1';
import './../scripts/scripts';
import './../../node_modules/bootstrap/dist/css/bootstrap.css';
const FullStack = () => {
    return (
        <>
            <Layout>
                <Section1 />
            </Layout>
        </>
    );
}

export default FullStack;