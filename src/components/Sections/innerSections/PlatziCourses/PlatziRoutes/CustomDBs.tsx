import React from 'react';
import { HeadRoute } from './commonRoutes/RoutesAbstract';
//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';

const CustomDBs = () => {

    const description = "En esta ruta personalizada profundizo en bases de datos relacionales, consultas SQL y diferentes aplicaciones y características de SQL.";
    /* 
    ['Name', 'Image', 'certification', "completion"]
    */
    let coursesArray = [
        [
            
            'Curso de Fundamentos de Bases de Datos',
            'https://static.platzi.com/media/achievements/badge-fundamentos-de-bases-de-datos-cc5eff2a-a7e0-4110-af5d-a47b628611da.png',
            'https://platzi.com/p/santiagocomesana03/curso/1566-course/diploma/detalle/',
            '100%',
        ],
        [
           'Curso de MySQL y MariaDB',
           'https://static.platzi.com/media/achievements/badge-mysql-mariadb-449be7e2-82cb-47bd-864d-cc49f855503c.png',
            '#',
            '0%',
        ],
        [
            'Curso Práctico de SQL',
            'https://static.platzi.com/media/achievements/badge-curso-sql-afdd3b08-e002-42c5-8637-d36ed13c956a.png',
            '#',
            '0%',
        ],
        /*[
            '',
            '',
            '#',
            '0%',
        ],*/
        

    ];
    return (

        <>
            <HeadRoute which={"CustomDBs"} route={"Bases de Datos Relacionales"} year={"TO BE"} description={description} completion={33} coursesArray={coursesArray} diplomaurl={''} />
        </>

    );
}

export { CustomDBs };