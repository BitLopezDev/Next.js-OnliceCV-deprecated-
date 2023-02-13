import React from 'react';

import { HeadRoute } from './commonRoutes/RoutesAbstract';
//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FullStackModal } from '../Modals/FullStackModal';
const FrontendReactRoute = () => {
    const description = "Esto es una descripción descriptiva";
    /* 
    ['Name', 'Image', 'certification', "completion"]
    */
    let coursesArray = [
        [
            'Curso de React.js: Patrones de Render y Composición',
            'https://static.platzi.com/media/achievements/reactjs-patrones-render_badge-3c77e155-b04a-4c95-ac61-e2b6d2d5b92e.png',
            'https://platzi.com/p/santiagocomesana03/curso/2457-react-patrones-render/diploma/detalle/',
            '100%',
        ],
        [
            'Manejo profesional del estado en React.js',
            'https://static.platzi.com/media/achievements/react-a4cc5125-0dee-4ec4-a3e3-f1d799973cfd.png',
            '#',
            '0%',
        ],
        [
            'Curso profesional de React Hooks',
            'https://static.platzi.com/media/achievements/badge-profesional-react-hooks-6b35d829-af8e-47e6-aef6-e4504db32bc4.png',
            '#',
            '0%',
        ],
        [
            'Curso de Progressive Web Aps con React',
            'https://static.platzi.com/media/achievements/1313-96cfddb0-624d-4a3b-8f1c-7e75660fb7a1.png',
            '#',
            '0%',
        ],


    ];
    return (

        <>
            <HeadRoute which={""} route={"LabsRoute"} year={"2025"} description={description} completion={95} coursesArray={coursesArray} />
        </>

    );

}

export { FrontendReactRoute };