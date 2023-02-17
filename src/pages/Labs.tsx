import * as React from 'react';
import Layout from '../components/Layout/Layout';
// import { Section4 } from '../components/Sections/Section4';
// 
import { Icongen } from '../components/Sections/innerSections/Section1/iconGen';
import { CommonRoute } from '../components/Sections/innerSections/Section3/PlatziRoutes/commonRoutes/commonLabs';


import Head from 'next/head';
import '../scripts/scripts';
import './../../node_modules/bootstrap/dist/css/bootstrap.css';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";


//import '../scripts/reactvueangular.js';
const FullStack = () => {
    const chart = () => {
        React.useEffect(() => {

        });
    }

    return (
        <>
            <Head>
                <title>Labs | Next.js</title>
            </Head>
            <Layout>


                <Icongen />
                {/* <CommonRoute /> */}

            </Layout>
        </>
    );
}

export default FullStack;

//TODO: correc