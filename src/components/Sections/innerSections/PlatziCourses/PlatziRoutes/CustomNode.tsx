import React from 'react';
import { HeadRoute } from './commonRoutes/RoutesAbstract';
//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';

const CustomNode = () => {

    const description = "En esta ruta personalizada aprendo Node.js para Backend.";
    /* 
    ['Name', 'Image', 'certification', "completion"]
    */
    let coursesArray = [
        [
            'Backend con Node.js : API REST con Express.js',
            'https://static.platzi.com/media/achievements/badge-backend-nodejs-apirest-expressjs-3fc7bca3-8dcb-459c-9638-12c92d502f5f.png',
            'https://platzi.com/p/santiagocomesana03/curso/2485-backend-nodejs/diploma/detalle/',
            "100%"
        ],
        [
            'Backend con Node.js: Base de Datos con PostgreSQL',
            'https://static.platzi.com/media/achievements/backend-node-82a9a4bf-7ce4-4437-86f6-c39dcce17d15.png',
            'https://platzi.com/p/santiagocomesana03/curso/2507-backend-nodejs-postgres/diploma/detalle/',
            "100%"
        ],
        [
            'Backend con Node.js: Autenticación con Passport.js y JWT',
            'https://static.platzi.com/media/achievements/badge-backend-nodejs-autenticacion-passportjs-jwt-3425c859-2f69-49a5-849a-792049d24.png',
            'https://platzi.com/p/santiagocomesana03/curso/2489-passport/diploma/detalle/',
            "100%"
        ],
        [
            'Curso de GraphQL con Node.js',
            'https://static.platzi.com/media/achievements/piezas-graphql-nodejs_badge-33cf72ee-ce02-46f9-be79-08fb9b433690.png',
            '#',
            '0%',
        ],
        [
            'Curso Avanzado de Node.js con GraphQL, Apollo Server y Prisma',
            'https://static.platzi.com/media/achievements/piezas-nodejs-graphql-apollo-server-prisma-cms_badge-5995d28d-302e-4bdd-bd86-e49a1b.png',
            
            '#',
            '0%',
        ],
        [
            'Curso de Node.js: Base de Datos con MongoDB y WebSockets',
            'https://static.platzi.com/media/achievements/piezas-nodejs-base-de-datos-mongodb-websockets_badge-74ce0c20-7b2f-4550-93e5-1f1158.png',
            '#',
            '0%',
        ],
        [
            'Curso de Node.js: Autenticación, Microservicios y Redis',
            'https://static.platzi.com/media/achievements/piezas-nodejs-autenticacion-microservicios-redis_badge-754d4f34-9282-4793-a68e-4058.png',
            '#',
            '0%',
        ],

    ];
    return (

        <>
            <HeadRoute which={"CustomNode"} route={"Backend con Node.js"} year={"TO BE"} description={description} completion={43} coursesArray={coursesArray} diplomaurl={''} />
        </>

    );
}

export { CustomNode };