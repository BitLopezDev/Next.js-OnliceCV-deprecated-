import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import { Grid, Image, Rail, Segment, Card } from 'semantic-ui-react';
import Link from 'next/link';
import { LateralBar } from '../components/Index/LateralBar'
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
        href: '#',

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
                    <h1><i>Santiago Comesaña López</i></h1>
                    <h4>CV Online</h4>
                    <br />
                </center>

                <Card.Group centered items={items} />
                <br /> <br />
                <section>
                    <Grid centered columns={3}>
                        <Grid.Column>
                            <Segment>
                                <p>Lady LADY</p>

                                <Rail position='left' style={{ width: 400 }}>
                                    <Segment>Left Rail Content</Segment>
                                </Rail>


                            </Segment>
                        </Grid.Column>
                    </Grid>


                </section>



            </Layout>
            <section className='barraLateral fixed-top '>
                <LateralBar />
            </section>

        </ React.Fragment>
    )


}

export default HomePage