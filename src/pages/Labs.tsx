import * as React from 'react';
import Layout from '../components/Layout/Layout';
import { Section4 } from '../components/Sections/Section4';
import { Section6 } from '../components/Sections/Section6';

import Section3 from '../components/Sections/Section3';
import Head from 'next/head';
import '../scripts/scripts';
import './../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import '../scripts/charts/frameworks.js';
import '../scripts/charts/backend.js';
import '../scripts/charts/frontend';

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
                {/* <center>

                    <canvas id="line-chart" width="800" height="450"></canvas> <br /><br />
                    <div className="row">
                        <div className="col-sm-6"><canvas id="frontend" width="800" height="450"></canvas></div>
                        <div className="col-sm-6"><canvas id="backend" width="800" height="450"></canvas></div>


                    </div>

                </center> */}


                <Section6 />

            </Layout>
        </>
    );
}

export default FullStack;