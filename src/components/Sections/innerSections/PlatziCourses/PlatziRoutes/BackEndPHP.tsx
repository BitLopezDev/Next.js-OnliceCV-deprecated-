import React from 'react';

//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';

import { HeadRoute } from './commonRoutes/RoutesAbstract';

const BackEndPHP = () => {
    const description = "En este curso refresco y profundizo mis conocimientos en PHP, PHP OOP, manejo de sesiones, cookies, conexiones a bases de datos. También incorporo a mis habilidades el Manejo de Laravel, Symfony, Inertia y Vue.js para Single Page Applications ";
    /* 
    ['Name', 'Image', 'certification', "completion"]
    */
    let coursesArray = [

        [
            'Curso Práctico de PHP',
            'https://static.platzi.com/media/achievements/badge-practico-php-5960cc98-6fc0-4d7d-ae65-6ef508abf1f3.png',
            'https://platzi.com/p/santiagocomesana03/curso/2516-course/diploma/detalle/',
            '100%',

        ],
        [
            'Curso de PHP con Composer',
            'https://static.platzi.com/media/achievements/badge-intro-php-platzi-3508edb9-2e55-42d9-bbcc-e68bb9f8b78d.png',
            'https://platzi.com/p/santiagocomesana03/curso/2024-course/diploma/detalle/',
            '100%',

        ],
        [
            'Curso de Manejo de Datos en PHP',
            'https://static.platzi.com/media/achievements/badge-manejodatos-php-f69add33-4465-4457-a81f-5e8dcbe3794c.png',
            'https://platzi.com/p/santiagocomesana03/curso/2032-course/diploma/detalle/',
            '100%',

        ],
        [
            'Curso de Programación Orientada a Objetos: POO',
            'https://static.platzi.com/media/achievements/badges-poo-513deb20-a5bd-40a7-b97a-c36dc772d512.png',
            'https://platzi.com/p/santiagocomesana03/curso/1474-course/diploma/detalle/',
            '100%',

        ],
        [
            'Curso Intermedio de PHP: Cookies, Sesiones y Modularización',
            'https://static.platzi.com/media/achievements/badge-intermediophp-cookies-da5e3c79-4ef9-4198-9244-ba2d88c039c1.png',
            'https://platzi.com/p/santiagocomesana03/curso/3144-course/diploma/detalle/',
            '100%',

        ],
        [
            'Curso Intermedio de PHP: Entornos Virtuales y Funciones Avanzadas',
            'https://static.platzi.com/media/achievements/badge-intermediophp-entornos-1-6047122d-b680-45f9-8fea-a776d79fb41a.png',
            '#',
            '96%',

        ],
        [
            'Curso Intermedio de PHP: Conexión a Bases de Datos',
            'https://static.platzi.com/media/achievements/badge-piezas-intermedio-php-conexion-bases-datos-16efa716-f27b-433e-809f-d6adf5b48f.png',
            '#',
            '0%',

        ],
        [
            'Curso Avanzado de PHP',
            'https://static.platzi.com/media/achievements/badges-php-avanzado-798212d8-15fb-44bf-850d-68645aa7f2e7.png',
            '#',
            '0%',

        ],
        [
            'Curso de Bases de Datos en Symfony',
            'https://static.platzi.com/media/achievements/piezas-fundamentos-symfony_badge-016a640d-8ee0-464c-b374-1ef8bf60109a.png',
            '#',
            '0%',

        ],
        [
            'Curso de Single Page Applications en Laravel con Inertia y Vue.js',
            'https://static.platzi.com/media/achievements/badge-single-page-apps-laravel-inertia-vue-2dd8b816-553d-44d8-8795-55841dc539e8.png',
            '#',
            '0%',

        ],
        [
            'Curso de API REST con Laravel',
            'https://static.platzi.com/media/achievements/badge-api-rest-laravel-b7b91364-00ac-4f2b-8b2a-e30a95211d4b.png',
            '#',
            '0%',

        ],


    ];
    return (

        <React.Fragment>
            <HeadRoute which={"BackendPHP"} route={"Backend con PHP"} year={"TO BE"} description={description} completion={30} coursesArray={coursesArray} diplomaurl={''} />
        </ React.Fragment>

    );

}

export { BackEndPHP };