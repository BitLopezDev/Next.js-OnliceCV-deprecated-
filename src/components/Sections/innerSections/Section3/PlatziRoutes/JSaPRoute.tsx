import React from 'react';
import { HeadRoute } from './commonRoutes/RoutesAbstract';
//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';

const JSaPRoute = () => {

    const description = "En este curso profundizo mis conocimientos en  JavaScript, POO, Estructura de datos. Aprendo debugging y matemáticas útiles, entre otras cosas.";
    /* 
    ['Name', 'Image', 'certification', "completion"]
    */
    let coursesArray = [
        [
            'Taller Práctico de JavaScript: Matemáticas y Estadística Básica',
            'https://static.platzi.com/media/achievements/practico-javascript-matematicas_piezas_badge-06073d4a-f0f1-4ddb-9a2a-eabd9bc2a6fd.png',
            '#',
            '83%',
        ],
        [
            'Curso Intermedio de Programación Orientada a Objetos en JavaScript',
            'https://static.platzi.com/media/achievements/intermedio-programacion-orientada-js-badge-b29243cc-39b1-4f4a-aec0-59f96f0412cd.png',
            '#',
            '0%',
        ],
        [
            'Curso de Manipulación de Arrays en JavaScript',
            'https://static.platzi.com/media/achievements/piezas-arrays-javascript_badge-3af41716-cb1c-4428-b95f-fb791743c826.png',
            '#',
            '0%',
        ],
        [
            'Curso de Complejidad Algorítmica con JavaScript',
            'https://static.platzi.com/media/achievements/badge4x-83ec677a-662f-4f94-a3bd-2ee4b4791179.png',
            '#',
            '0%',
        ],
        [
            'Curso de JavaScript Engine (V8) y el Navegador',
            'https://static.platzi.com/media/achievements/badge-javascript-engine-v8-navegador-de67cba4-0548-4361-9c6a-1a25aa96fa2a.png',
            '#',
            '0%',
        ],
        [
            'Curso de Debugging con Chrome DevTools',
            'https://static.platzi.com/media/achievements/badge-debugging-chrome-devtools-c75256bb-2a2f-4954-b2c0-9c946494ac37.png',
            '#',
            '0%',
        ],
        [
            'Curso Profesional de JavaScript',
            'https://static.platzi.com/media/achievements/badge-profesional-javascript-13538df2-24ce-433f-9aa6-e34eed608e70.png',
            '#',
            '0%',
        ],
        [
            'Curso Profesional de Consumo de API REST con JavaScript',
            'https://static.platzi.com/media/achievements/curso-profesional-consumo-api-rest-javascript_badge-842a9d5d-8995-48e7-8582-73b1890.png',
            '#',
            '0%',
        ],
        [
            'Curso de Estructuras de Datos con JavaScript',
            'https://static.platzi.com/media/achievements/badge-estructura-datos-javascript-5c4802d5-4acc-46ca-a8e0-0fa534c607cd.png',
            '#',
            '0%',
        ],

    ];
    return (

        <>
            <HeadRoute which={"JavaScriptProf"} route={"JavaScript a Profundidad"} year={"TO BE"} description={description} completion={22} coursesArray={coursesArray} diplomaurl={''} />
        </>

    );
}

export { JSaPRoute };