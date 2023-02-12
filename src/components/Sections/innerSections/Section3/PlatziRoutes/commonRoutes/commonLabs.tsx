import React from 'react';
import { Image, Item } from 'semantic-ui-react';
import { HeadRoute } from './RoutesAbstract';


//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FullStackModal } from '../../Modals/FullStackModal';
const CommonRoute = () => {
    const description = "Esto es una descripción descriptiva";
    /* 
    ['Name', 'Image', 'certification', "completion"]
    */
    let coursesArray = [
        [
            'Terminal de Linux',
            'https://static.platzi.com/media/achievements/badge-terminal-5c5518b5-43d0-4387-b39e-3d85db446c5f.png',
            'https://platzi.com/p/santiagocomesana03/curso/2292-terminal/diploma/detalle/',
            "100%"
        ],

        [
            'Curso profesional de Git y GitHub',
            'https://static.platzi.com/media/achievements/badge-github-0b729570-934d-47d8-ba6b-610d7f15e0ec.png',
            'https://platzi.com/p/santiagocomesana03/curso/1557-git-github/diploma/detalle/',
            "100%"
        ],
        [
            'Asincronismo con JavaScript',
            'https://static.platzi.com/media/achievements/badge-asincro-js-9f17b092-47d0-4c8a-a59d-67714aa18db3.png',
            'https://platzi.com/p/santiagocomesana03/curso/3175-asincronismo-js/diploma/detalle/',
            "100%"
        ],
        [
            'Curso de Webpack',
            'https://static.platzi.com/media/achievements/badge-webpack-3e3867f2-5bcf-4a7e-9af2-cf735850a791.png',
            'https://platzi.com/p/santiagocomesana03/curso/2242-webpack/diploma/detalle/',
            "100%"
        ],
        [
            'Curso práctico de React.j',
            'https://static.platzi.com/media/achievements/piezas-reactjs-badge-1-52e950ac-c75c-40f5-94e0-8b6cab392ed2.png',
            'https://platzi.com/p/santiagocomesana03/curso/2484-react-practico/diploma/detalle/',
            "100%"
        ],
        [
            'Curso Profesional de Next.js',
            'https://static.platzi.com/media/achievements/piezas-profesional-nextjs_badge-c9a806c6-e240-45da-81da-c206b0611e84.png',
            'https://platzi.com/p/santiagocomesana03/curso/2707-profesional-nextjs/diploma/detalle/',
            "100%"
        ],
        [
            'Curso de fundamentos de bases de datos',
            'https://static.platzi.com/media/achievements/badge-fundamentos-de-bases-de-datos-cc5eff2a-a7e0-4110-af5d-a47b628611da.png',
            'https://platzi.com/p/santiagocomesana03/curso/1566-bd/diploma/detalle/',
            "100%"
        ],
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

    ];
    return (

        <>
            <HeadRoute cert={"https://react.semantic-ui.com/images/wireframe/image.png"} route={"LabsRoute"} year={"2025"} description={description} completion={95} coursesArray={coursesArray} />
        </>

    );


}

export { CommonRoute };