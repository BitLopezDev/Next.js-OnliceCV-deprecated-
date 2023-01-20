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

const Section4 = () => {
    return (

        <React.Fragment>
            {/* <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>
                        Daniel is a comedian living in Nashville.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        10 Friends
                    </a>
                </Card.Content>
            </Card>

            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>
                        Daniel is a comedian living in Nashville.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        10 Friends
                    </a>
                </Card.Content>
            </Card> */}
            <br /> <br />
            <Grid columns='three' divided centered>
                <Grid.Row>

                    <Grid.Column>
                        <Card>
                            <Image src={Object.entries(NextU)[0].slice(1)} wrapped ui={false} />
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
                        <Card>
                            <Image src={Object.entries(Platzi)[0].slice(1)} wrapped ui={false} />
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

        </React.Fragment>

    );
}

export { Section4 };





