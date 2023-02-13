import React from 'react';

import { HeadRoute } from './RoutesAbstract';
// import { HeadRoute } from './commonRoutes/RoutesAbstract';


//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FullStackModal } from '../../Modals/FullStackModal';
const CommonRoute = () => {
    const description = "Esto es una descripción descriptiva";
    /* 
    ['Name', 'Image', 'certification', "completion"]
    */
    let coursesArray = [
        [
            'Name',
            'Image', 
            'certification', 
            'completion',
        ],
        [
            'Name',
            'Image', 
            'certification', 
            'completion',
        ],
        [
            'Name',
            'Image', 
            'certification', 
            'completion',
        ],
        [
            'Name',
            'Image', 
            'certification', 
            'completion',
        ],
        [
            'Name',
            'Image', 
            'certification', 
            'completion',
        ],

    ];
    return (

        <>
            <HeadRoute which={""} route={"LabsRoute"} year={"2025"} description={description} completion={95} coursesArray={coursesArray} />
        </>

    );


}

export { CommonRoute };