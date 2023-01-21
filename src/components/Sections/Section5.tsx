import React, { Component } from 'react'
import { Card, Icon, Grid, Image } from 'semantic-ui-react'
import './../../styles/fullstack.module.scss';
import NextU from './../../../public/assets/users/system/NextU.png';
import Platzi from './../../../public/assets/users/system/platzi.png';

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

const Section5 = () => {
    return (

        <React.Fragment>
            <br />
            <center>
                <h2>
                    Mis estudios liceales
                </h2>



                <div className="card" style={{ maxWidth: 1000 }}>
                    <div className="card-body">
                        <h4 className="card-title">Sexto ingeniería</h4>
                        <p className="card-text">Aprobado en 2020, me dio conocimientos de matemática que me serán útiles por el resto
                            de mi vida, y muy especialmente trabajando en programación. Gracias a esto, entiendo propiedades del
                            sistema binario, entiendo lógica de funciones; Ciertamente, esta orientación junto con los conocimientos
                            en informática son un gran aliado para mí en el mundo del desarrollo de Software.</p>

                    </div>
                </div>
                <div className="card" style={{ maxWidth: 1000 }}>
                    <div className="card-body">
                        <h4 className="card-title">Sexto Medicina</h4>
                        <p className="card-text">Cursé sexto Medicina en 2022 por mi gran amor por la biología humana. Gracias a los
                            conocimientos previos, pude afrontar este nuevo desafío con una cabeza muy lógica y analítica, razón por
                            la que no todas mis preguntas han tenido una respuesta.</p>

                    </div>
                </div>
            </center>



        </React.Fragment>

    );
}

export { Section5 };





