import * as React from 'react';
import Layout from '../components/Layout/Layout';

import { Image, Card } from 'semantic-ui-react';
import Link from 'next/link';
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

        <>


            <Layout>
                <Card.Group centered items={items} />

            </Layout>

        </>
    )


}

export default HomePage