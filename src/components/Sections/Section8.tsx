import React from 'react'
import { Image } from 'semantic-ui-react'
import './../../styles/fullstack.module.scss';

import './../../../node_modules/bootstrap/dist/css/bootstrap.css';
// ./../../assets/users/Santiago/credenciales/NextU/PHP_OOP.png
// import { FullStackRoute } from './innerSections/Section3/PlatziRoutes/FullStackRoute';
// import { FrontendReactRoute } from './innerSections/Section3/PlatziRoutes/FrontendReactRoute';
// import { FullStackNextRoute } from './innerSections/Section3/PlatziRoutes/FullStackNextRoute';
// import { HTMLCSSRoute } from './innerSections/Section3/PlatziRoutes/HTMLCSSRoute';
// import { JSaPRoute } from './innerSections/Section3/PlatziRoutes/JSaPRoute'
// import { Web3 } from './innerSections/Section3/PlatziRoutes/Web3';





//import './../../scripts/common';
/*import './../../scripts/Libs/bootstrap';
import './../../scripts/Libs/bootstrap.bundle';
import './../../scripts/index';*/

const Section8 = () => {
    return (

        <React.Fragment>
            <section className="progress-section">
                <div className="container">
                    <div className="row">
                        <h1>Ciberseguridad en platzi</h1>
                        <div className="col-md-4">
                            <div className="progress-diamond progress-diamond-one">
                                <h2>48%</h2>
                            </div>
                            <br /> <br />
                            <p>Ingeniería Social </p>
                        </div>
                        <div className="col-md-4">
                            <div className="progress-diamond progress-diamond-two">
                                <h2>0%</h2>
                            </div>
                            <br /> <br />
                            <p>Ciberinteligencia</p>
                        </div>

                        <div className="col-md-4">
                            <div className="progress-diamond progress-diamond-three">
                                <h2>0%</h2>
                            </div>
                            <br /> <br />
                            <p>Hacking Ético</p>
                        </div>



                    </div>
                    <br /><br /><br />


                    <div className="row">

                        <div className="col-md-4">
                            <div className="progress-diamond progress-diamond-zero">
                                <h2>0%</h2>
                            </div>
                            <br /> <br />
                            <p>Pentesting </p>
                        </div>
                        <div className="col-md-4">
                            <div className="progress-diamond progress-diamond-zero">
                                <h2>0%</h2>
                            </div>
                            <br /> <br />
                            <p>Análisis de Malware</p>
                        </div>

                        <div className="col-md-4">
                            <div className="progress-diamond progress-diamond-zero">
                                <h2>0%</h2>
                            </div>
                            <br /> <br />
                            <p>DLP</p>
                        </div>



                    </div>


                </div>
            </section>


        </React.Fragment>

    );
}

export { Section8 };





