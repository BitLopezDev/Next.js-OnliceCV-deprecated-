import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import { Grid, Rail, Segment, Card, List } from 'semantic-ui-react';
import { LateralBar } from '../components/Index/LateralBar';
import { School } from '../components/Sections/School';
// import _JSXStyle from './../styles/global';
const items = [
    {
        header: 'Web Development',
        description:
            'Vea mi Currículum como Desarrollador Web Full Stack',
        meta: 'Junior',
        href: 'FullStack',

    },
    {
        header: 'Cybersecurity',
        description:
            'Vea mi currículum como estudiante y entusiasta de la cyberseguriad',
        meta: 'Estudiante, entusiasta',
        href: 'Security',

    },
];
function HomePage() {

    return (

        <React.Fragment>
            <Head>
                <title>Santiago Comesaña | index</title>
            </Head>


            <Layout>



                <center>
                    <h1 className="antigradienttext"><i>Santiago Comesaña López</i></h1>
                    <h4>CV Online</h4>
                    <br />
                </center>

                <Card.Group centered items={items} />
                <br /> <br />
                <section>
                    <Grid centered columns={3}>
                        <Grid.Column>
                            <Segment style={{ width: 300 }}>
                                <h3>Puestos deseados:</h3>
                                <br />
                                <h5>Desarrollo Web:</h5>
                                <p>Quisiera poder estar en un puesto relacionado con el desarrollo web, ya sea en <strong>Frontend</strong> como <strong>Backend</strong>: ambas áreas me encantan y ambas me generan mucha curiosidad.<br />
                                    Estoy profundamente <strong>apasionado</strong> por <strong>Next.js</strong> y <strong>Node.js</strong>. Además, mi interés por React.js -siendo una librería muy famosa- me hace un gran candidato para trabajar en proyectos que lo empleen.
                                    Sería un placer poder brindar mis conocimientos en ciberseguridad al proyecto que se me asigne.
                                </p>
                                <br />
                                <h5>Ciberseguridad:</h5>
                                <p>En este área tengo una aspiración ambiciosa y particular: trabajar en una empresa no muy grande en la que pudiera estar a cargo de de una, varias o todas las siguientes responsabilidades: <strong>Endpoint Protection</strong> , <strong>Firewall de red</strong>, <strong>NIPS/HIPS</strong>, <strong>GPO de Windows</strong>, configuración de reglas <strong>DLP</strong> análisis de software potencialmente malicioso, e investigación en caso de incidentes. <br />
                                    Adolezco de ambición -a toda honra-, pero estoy seguro de estar a la altura.
                                    A su vez, estaría encantado de aportar mi experiencia en mantenimiento de PCs. <br />
                                    Si se tratase de una gran compañía, quisisera un puesto en el que tenga oportunidad de absorber tanto conocimiento como me sea posible, para poder mejorar en esta área, y poder rendir exámenes para las certificaciones internacionales teniendo experiencia.

                                </p>
                                <Rail className='coloredshadow' position='left' style={{ width: 400, height: '600' }}>
                                    <Segment>
                                        <h3>Datos Rápidos:</h3><br />
                                        <List as='ol'>

                                            <List.Item as='li' value='*'>
                                                <h5>Educación Formal:</h5>
                                                <List.Item as='ol'>
                                                    <List.Item as='li' value='-'>
                                                        Sexto Ingeniería (2020)
                                                    </List.Item>
                                                    <List.Item as='li' value='-'>
                                                        Sexto Medicina (2022)
                                                    </List.Item>

                                                </List.Item>
                                            </List.Item>

                                            {/*  */}
                                            <List.Item as='li' value='*'>
                                                <h5>Idiomas:</h5>
                                                <List.Item as='ol'>
                                                    <List.Item as='li' value='-'>
                                                        Español (Nativo)
                                                    </List.Item>
                                                    <List.Item as='li' value='-'>
                                                        Inglés (C1)
                                                    </List.Item>
                                                    <List.Item as='li' value='-'>
                                                        Francés (idioma de infancia)
                                                    </List.Item>
                                                </List.Item>
                                            </List.Item>

                                            {/*  */}

                                            <List.Item as='li' value='*'>
                                                <h5>Credenciales de Development:</h5>
                                                <List.Item as='ol'>
                                                    <List.Item as='li' value='-'>
                                                        Full Stack Web Developer con JavaScript | 2023
                                                    </List.Item>

                                                    <List.Item as='li' value='-'>
                                                        Frontend Web developer con JavaScript | 2022
                                                    </List.Item>
                                                    <List.Item as='li' value='-'>
                                                        Web Developer | 2016
                                                    </List.Item>
                                                    {/* <List.Item as='li' value='-'>
                                                        Full Stack Web Developer con Next.js | TO BE
                                                    </List.Item>
                                                    <List.Item as='li' value='-'>
                                                        Frontend con React.js | TO BE
                                                    </List.Item>
                                                    <List.Item as='li' value='-'>
                                                        JavaScript a profundidad | TO BE
                                                    </List.Item>
                                                    <List.Item as='li' value='-'>
                                                        HTML y CSS a profundidad | TO BE
                                                    </List.Item>
                                                    <List.Item as='li' value='-'>
                                                        Desarrollo Web 3 | TO BE
                                                    </List.Item> */}
                                                </List.Item>
                                            </List.Item>
                                            <List.Item as='li' value='*'>
                                                <h5>Credenciales en Ciberseguridad:</h5>
                                                <List.Item as='ol'>
                                                    <List.Item as='li' value='-'>
                                                        Ciberseguridad para empresas | 2023
                                                    </List.Item>
                                                    <List.Item as='li' value='-'>
                                                        Curso de preparación para norma 27001 | TO BE
                                                    </List.Item>

                                                </List.Item>
                                            </List.Item>
                                            {/*  */}
                                            <List.Item as='li' value='*'>
                                                <h5>Experiencia laboral:</h5>
                                                <List.Item as='ol'>
                                                    <List.Item as='li' value='-'>
                                                        TCS | 2021 - 2022
                                                        <p>Era agente del call center de soporte técnico para una farmacéutica.
                                                            <br />
                                                            Aprendí a manejar el trabajo bajo presión, el manejar varios idiomas a la vez -que hoy me es absolutamente natural-, a consultar con los compañeros y trabajar en equipo.
                                                        </p>
                                                    </List.Item>
                                                    <List.Item as='li' value='-'>
                                                        Emprendiminto de Reparación de PCs
                                                        <p>Interacción con clientes, manejo, instalación y configuración de software de Microsoft en distintas versiones, manejo de antivirus domésticos, entre otros.
                                                        </p>
                                                    </List.Item>


                                                </List.Item>
                                            </List.Item>

                                            {/*  */}
                                            <List.Item as='li' value='*'>
                                                <h5>Otras habilidades:</h5>
                                                <List.Item as='ol'>
                                                    <List.Item as='li' value='-'>
                                                        Buen organizador
                                                    </List.Item>
                                                    <List.Item as='li' value='-'>
                                                        Buenas habilidades interpersonales
                                                    </List.Item>
                                                    <List.Item as='li' value='-'>
                                                        Buen escucha
                                                    </List.Item>
                                                    <List.Item as='li' value='-'>
                                                        Buen manejo de Microsoft Word y Windows
                                                    </List.Item>

                                                </List.Item>
                                            </List.Item>


                                        </List>


                                    </Segment>
                                </Rail>


                            </Segment>

                        </Grid.Column>
                    </Grid>
                    <br /><br /><br /><br />
                    <School />
                </section>



            </Layout>
            <section className='barraLateral fixed-top '>
                <LateralBar />
            </section>

        </ React.Fragment>
    )


}

export default HomePage