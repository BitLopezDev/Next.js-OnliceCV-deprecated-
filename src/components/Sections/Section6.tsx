import React, { Component } from 'react'
import { Card, Icon, Grid, Image } from 'semantic-ui-react'
import './../../styles/fullstack.module.scss';
import '../../scripts/charts/frameworks.js';
import '../../scripts/charts/backend.js';
import '../../scripts/charts/frontend.js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// ./../../assets/users/Santiago/credenciales/NextU/PHP_OOP.png
// import { FullStackRoute } from './innerSections/Section3/PlatziRoutes/FullStackRoute';
// import { FrontendReactRoute } from './innerSections/Section3/PlatziRoutes/FrontendReactRoute';
// import { FullStackNextRoute } from './innerSections/Section3/PlatziRoutes/FullStackNextRoute';
// import { HTMLCSSRoute } from './innerSections/Section3/PlatziRoutes/HTMLCSSRoute';
// import { JSaPRoute } from './innerSections/Section3/PlatziRoutes/JSaPRoute'
// import { Web3 } from './innerSections/Section3/PlatziRoutes/Web3';




import './../../../node_modules/bootstrap/dist/css/bootstrap.css';
//import './../../scripts/common';
/*import './../../scripts/Libs/bootstrap';
import './../../scripts/Libs/bootstrap.bundle';
import './../../scripts/index';*/

const Section6 = () => {
    return (

        <React.Fragment>

            <center>

                <canvas id="line-chart" width="800" height="450"></canvas> <br /><br />
                <div className="row">
                    <div className="col-sm-6"><canvas id="frontend" width="800" height="450"></canvas></div>
                    <div className="col-sm-6"><canvas id="backend" width="800" height="450"></canvas></div>


                </div>

            </center>


        </React.Fragment>

    );
}

export { Section6 };





