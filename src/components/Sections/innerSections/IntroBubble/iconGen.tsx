import React from 'react';
import Image from 'next/image';

import PHP_OOP from './../../../../../public/assets/users/Santiago/credenciales/NextU/PHP_OOP.png';
import HTML5 from './../../../../../public/assets/users/Santiago/credenciales/NextU/HTML5.png';
import JavaScript from './../../../../../public/assets/users/Santiago/credenciales/NextU/JavaScript.png';
import CSS3 from './../../../../../public/assets/users/Santiago/credenciales/NextU/CSS3.png';
import XML from './../../../../../public/assets/users/Santiago/credenciales/NextU/XML.png';
//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';

function Icongen() {
   /* var icon1;
    var baseRoute = './../../../../../public/assets/users/Santiago/credenciales/NextU/';

    var allBadges = [Object.entries(XML)[0].slice(1), Object.entries(CSS3)[0].slice(1), Object.entries(JavaScript)[0].slice(1), Object.entries(HTML5)[0].slice(1), Object.entries(PHP_OOP)[0].slice(1),];


    var allBadgesCopy = [XML, PHP_OOP, HTML5, JavaScript, CSS3,];
    //var allBadgesCopy = [PHP_OOP, HTML5, HTML5, JavaScript, JavaScript, PHP_OOP, HTML5,];


    // console.log(allBadgesCopy);
    var randomnum = function (x = 0) {
        console.log('El numero es' + (6 - x));
        let num = Math.floor(Math.random() * (6 - x));
        let item = allBadgesCopy[num];
        console.log('Item es ' + JSON.stringify(item))
        allBadgesCopy.splice(num, 1);
        return item;
    };

    //
    //Object.keys(badgesObject)[badge1Math]]
    var badge1 = (randomnum(0).slice(0, 2)).slice(0, -2);
    console.log('badge1 ' + badge1);

    /*var badge2 = ((JSON.stringify(randomnum(1))).slice(0, 2)).slice(0, -2);
    console.log('badge2 ' + badge2);

    var badge3 = ((JSON.stringify(randomnum(2))).slice(0, 2)).slice(0, -2);
    console.log('badge3 ' + badge3);*/



    return (
        <React.Fragment>

            {/* <img src={badge1} id="carouselIMG1" alt="PHP OOP" width={120} height={120} className="d-block" />
            <img src={badge2} id="carouselIMG2" alt="PHP OOP" width={120} height={120} className="d-block" />
            <img src={badge3} id="carouselIMG3" alt="PHP OOP" width={120} height={120} className="d-block" /> */}

        </React.Fragment>

    );
}

export { Icongen };