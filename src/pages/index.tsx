import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Head from '../components/Head/Headf';
import { Image, Card } from 'semantic-ui-react';
import Link from 'next/link';
// import _JSXStyle from './../styles/global';
const items = [
    {
        header: 'Web Development',
        description:
            'Vea mi Currículum como Desarrollador Web Full Stack',
        meta: 'Junior',
        href:'#',

    },
    {
        header: 'Cybersecurity',
        description:
            'Vea mi currículum como estudiante y entusiasta de la cyberseguriad',
        meta: 'Estudiante, entusiasta',
        href:'#',

    },
];
function HomePage() {

    return (

        <>
            <Head ogType="website"></Head>

            <Layout>
                <Card.Group centered items={items} />

            </Layout>

        </>
    )


}

export default HomePage