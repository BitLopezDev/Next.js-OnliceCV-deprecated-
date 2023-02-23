import React from 'react';
import { HeadRoute } from './commonRoutes/RoutesAbstract';
//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';

const FullStackNextRoute = () => {

    const description = "En este curso profundizo mis conocimientos en Next.js gracias a herramientas como GraphQL, aprendo optimización y deploy a producción, manejo de grandes Datasets, y mucho más.";
    /* 
    ['Name', 'Image', 'certification', "completion"]
    */
    let coursesArray = [
        [
            'Curso práctico de Next.js',
            'https://static.platzi.com/media/achievements/badge-practico-next-js--cb0ccb8f-efa3-40a8-b91f-8cf5a4d51eeb.png',
            'https://platzi.com/p/santiagocomesana03/curso/2690-nextjs-practico/diploma/detalle/',
            '100%',
        ],
        [
            'Curso de Next.js con GraphQL',
            'https://static.platzi.com/media/achievements/piezas-nextjs-graphql_badge-cbeed361-b95b-439e-a48b-ce024f85384e.png',
            '#',
            '0%',
        ],

        [
            'Curso de Next.js: Internacionalización de Aplicaciones Web con i18n',
            'https://static.platzi.com/media/achievements/badge-nextjs-internacionalizacion-de6e10b1-0a08-4d47-98eb-54e4177f4925.png',
            '#',
            '0%',
        ],
        [
            'Next.js: Optimización y Manejo de Grandes Datasets',
            'https://static.platzi.com/media/achievements/next-defe9ba8-b678-4934-a898-7be2188cdbac.png',
            '#',
            '0%',
        ],
        [
            'Next.js: Seguridad Web con OWASP',
            'https://static.platzi.com/media/achievements/badge-next-js-seguridad-con-owasp-9c9469e2-d9c9-4022-9149-8833588fb8f5.png',
            '#',
            '0%',
        ],

    ];
    return (

        <>
            <HeadRoute which={"Fullstacknext"} route={"Full Stack Developer con Next.js"} year={"TO BE"} description={description} completion={21} coursesArray={coursesArray} diplomaurl={''} />
        </>

    );

}

export { FullStackNextRoute };