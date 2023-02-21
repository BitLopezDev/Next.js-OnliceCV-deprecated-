import React from 'react';
import { HeadRoute } from './commonRoutes/RoutesAbstract';
//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';

const HTMLCSSRoute = () => {
    const description = "En este curso profundizo mis conocimientos en HTML y CSS en Responsive design, preprocesadores, un curso de diseño para desarrolladores, y cursos profundos de Grid t Flexbox";
    /* 
    ['Name', 'Image', 'certification', "completion"]
    */
    let coursesArray = [
        [
            'Curso Definitivo de HTML y CSS',
            'https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png',
            '#',
            '43%',
        ],
        [
            'Curso de Responsive Design: Maquetación Mobile First',
            'https://static.platzi.com/media/achievements/badge-responsive-design-ce53c4fc-a4c3-41e1-a5c8-3931932343a6.png',
            '#',
            '0%',
        ],
        [
            'Curso de Preprocesadores de CSS',
            'https://static.platzi.com/media/achievements/badge-preprocesadores-8c2ed161-d4f1-4d08-bb9e-9e741cdd539d.png',
            '#',
            '0%',
        ],
        [
            'Curso de Transformaciones y Transiciones en CSS',
            'https://static.platzi.com/media/achievements/badges-animacion-css-03-4f2cd60d-e10b-4ea3-b5fe-1c3bc38e6970.png',
            '#',
            '0%',
        ],
        [
            'Curso de Animaciones con CSS',
            'https://static.platzi.com/media/achievements/badges-animacion-css-02-740b1ebd-dbcf-4cfc-befb-5988cc6b03d0.png',
            '#',
            '0%',
        ],

    ];
    return (
        <>
            <HeadRoute which={"HTMLCSS"} route={"HTML y CSS a Profundidad"} year={"TO BE"} description={description} completion={11} coursesArray={coursesArray} diplomaurl={''} />
        </>

    );

}

export { HTMLCSSRoute };