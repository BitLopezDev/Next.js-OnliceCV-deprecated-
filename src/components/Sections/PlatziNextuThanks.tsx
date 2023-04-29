import React from 'react';
import { Card, Icon, Grid, Image } from 'semantic-ui-react';
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

const PlatziNextuThanks = () => {
    return (

        <React.Fragment>

            <br /> <br /><br /><br />
            <center>
                <h2>
                    Sobre quienes me formaron:</h2></center>
            <br />
            <Grid columns='three' divided centered>
                <Grid.Row>

                    <Grid.Column>
                        <Card style={{ marginLeft: '-50px' }}>
                            <Image src={Object.entries(NextU)[0].slice(1)} wrapped ui={false} alt="No se pudo cargar la imagen"/>
                            <Card.Content>
                                <Card.Header>NextU</Card.Header>
                                <Card.Meta>2015 - 2016 | 2022</Card.Meta>
                                <Card.Description>
                                    Next University me dio las bases de la programación y me permitió actualizarme en 2022.

                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>

                                    Eternamente agradecido
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                  
                    <Grid.Column>
                        <Card style={{ marginLeft: 50 }}>
                            <Image src={Object.entries(Platzi)[0].slice(1)} wrapped ui={false} alt="No se pudo cargar la imagen"/>
                            <Card.Content>
                                <Card.Header>Platzi</Card.Header>
                                <Card.Meta>2022 - 2023</Card.Meta>
                                <Card.Description>
                                    Platzi me permitió profundizar en todos mis conocimientos y llevarlos al siguiente nivel.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>

                                    Eternamente agradecido
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>


            </Grid>
            <br />


            <br />
            <div className="card w-60" style={{ width: '100%', backgroundColor: 'white !important' }} >
                <div className="card-img-top d-flex align-items-center ">
                    <div>
                        <Image className="img-fluid" src="./assets/users/system/NextU.png" alt="NextU" />
                    </div>

                    <p className="card-text"><strong>Next University</strong> me dio en 2015/2016 las bases elementales de la
                        programación y la informática que me acompañan desde entonces en todos mis razonamientos lógicos
                        Ahora, en 2022, profundicé en mi conocimiento de programación web con importantes actualizaciones como
                        funciones asíncronas, React.js, flex y grid.
                    </p>
                </div>


            </div>
            <br />
            <div className="card w-60" style={{ width: '100%', backgroundColor: 'white !important' }}>
                <div className="card-img-top d-flex align-items-center">
                    <div>
                        <Image className="img-fluid" src="./assets/users/system/platzi.png" alt="Platzi" />
                    </div>

                    <p className="card-text"><strong>Platzi</strong> me permite profundizar en mis nuevos conocimientos y, con una
                        metodología diferente, me enseñó a ver los conceptos de otra manera. En Platzi puedo expandir mis
                        conocimientos hasta un nivel mucho máz avanzado, y con una garantía indiscutible, puesto que todas las
                        evaluaciones requieren un mínimo de 90% para ser aprobadas. En esta academia, una vez terminados todos
                        los cursos, tendré muchísimo más que ofrecer. </p>
                </div>


            </div>

        </React.Fragment>

    );
}

export { PlatziNextuThanks };





