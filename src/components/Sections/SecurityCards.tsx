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

const SecurityCards = () => {
    return (

        <React.Fragment>
            <div className="container">
                <div className="row">

                    <div className="col-sm-4 sectile">
                        <div className="tile-progress fondogradiente">
                            <div className="tile-header">
                                <h4>Inteligencia en ciberseguridad </h4>
                                <span>Estudios en Ciberinteligencia</span>
                            </div>
                            <div className="tile-progressbar">
                                <span data-fill="9%" style={{ "width": "9%" }}></span>
                            </div>
                            <div className="tile-footer">
                                <h4>
                                    <span className="pct-counter">9</span>%
                                </h4>
                                <span>Platzi | Udemy</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 sectile">
                        <div className="tile-progress fondoantigradiente">
                            <div className="tile-header">
                                <h4>Normal ISO/IEC 27001 </h4>
                                <span>Estudios en norma ISO/IEC 27001</span>
                            </div>
                            <div className="tile-progressbar">
                                <span data-fill="6%" style={{ "width": "6%" }}></span>
                            </div>
                            <div className="tile-footer">
                                <h4>
                                    <span className="pct-counter">6</span>%
                                </h4>
                                <span>Platzi | Udemy </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 sectile">
                        <div className="tile-progress fondogradiente">
                            <div className="tile-header">
                                <h4>Análisis de malware</h4>
                                <span>Estudios de análisis de malware</span>
                            </div>
                            <div className="tile-progressbar">
                                <span data-fill="0%" style={{ "width": "0%" }}></span>
                            </div>
                            <div className="tile-footer">
                                <h4>
                                    <span className="pct-counter">0</span>%
                                </h4>
                                <span>Platzi | Udemy</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </React.Fragment>

    );
}

export { SecurityCards };





