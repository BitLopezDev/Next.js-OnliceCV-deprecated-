import React from 'react';
import { Image, Item } from 'semantic-ui-react';
import { HeadRoute } from './HeadRouteInner';


//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FullStackModal } from '../../Modals/FullStackModal';
const CommonRoute = () => {
    const description = "Esto es una descripción descriptiva";
    return (

        <>
            <HeadRoute cert={"https://react.semantic-ui.com/images/wireframe/image.png"} route={"LabsRoute"} year={"2025"} description={description} completion={95} />
        </>

    );


}

export { CommonRoute };