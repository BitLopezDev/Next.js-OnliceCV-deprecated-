import React, { useEffect } from 'react';
//bootstrap = require('./../scripts/Libs/bootstrap.bundle')
import { Tooltip } from 'react-bootstrap';
import ReactDOM from "react-dom";

// declare 

function useBadges() {

    // console.log('useBadges');

    return useEffect(() => {
        var bootstrap: any;
        bootstrap = require('./../scripts/Libs/bootstrap.bundle');
        let iFromWhileOnload = 0;
        var intervalId = window.setInterval(function () {
            // call your function here

            if (iFromWhileOnload > 30) {
                clearInterval(intervalId);
            } else {
                useBadgeRandomization();
            }
            ++iFromWhileOnload;
        }, 5321);

        /*
        do {
            setTimeout()
            
            ++iFromWhileOnload;
            
        } while (  iFromWhileOnload < 30);*/


        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            //
            // require('./../scripts/Libs/bootstrap.bundle');
            // require('./../scripts/Libs/bootstrap');
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
        return () => clearInterval(intervalId);









    });







}
function useBadgeRandomization() {

    // console.log('useBadgeRandomization llamada');

    // document.getElementById('phpbadge').classList.add("active");
    const baseRoute = './assets/users/Santiago/credenciales/NextU/';
    const badgesObject = {
        phpOOP: {
            alt: `PHP OOP`,
            route: `PHP_OOP.png`,
        },
        css3: {
            alt: `CSS 3`,
            route: `CSS3.png`,
        },
        html5: {
            alt: `HTML 5`,
            route: `HTML5.png`,
        },
        javascript: {
            alt: `JavaScript`,
            route: `JavaScript.png`,
        },
        jQuery: {
            alt: `jQuery`,
            route: `jQuery_por_ejemplos.png`,
        },
        jQueryUI: {
            alt: `jQuery UI`,
            route: `jQuery_UI_-_Web.png`,
        },
        XML: {
            alt: `XML`,
            route: `XML.png`,
        },

    }
    const howmanybadges = 6; //first element is 0


    //console.log( Math.floor(Math.random() * 7));

    //console.log(badgesObject[Object.keys(badgesObject)[0]].route);
    console.group('badge1math');
    var badge1Math = Math.floor(Math.random() * howmanybadges);
    //console.log(badge1Math);
    var badge1 = [badgesObject[Object.keys(badgesObject)[badge1Math]].route, badgesObject[Object.keys(badgesObject)[badge1Math]].alt];
    // console.log('1');
    //  console.log(badge1);
    console.groupEnd();
    var badge2Math = Math.floor(Math.random() * howmanybadges);
    //console.log(badge2Math);

    badge2Math = badge1Math;
    // console.log(badge2Math);
    console.group('If b2 = b1');
    if (badge2Math === badge1Math) {
        badge2Math = ++badge2Math;
        //console.log(badge2Math);
        var badge2 = [badgesObject[Object.keys(badgesObject)[badge2Math]].route, badgesObject[Object.keys(badgesObject)[badge2Math]].alt];
        console.log(`badge2: ${badge2}`);
        // console.log('2');
        // console.log(badge2);



    } else {

        badge2 = [badgesObject[Object.keys(badgesObject)[badge2Math]].route, badgesObject[Object.keys(badgesObject)[badge2Math]].alt];
        // console.log('a');
        // console.log(badge2);

    }
    console.groupEnd();
    console.group('Badge3Generation');

    var badge3Math;

    var iFromWhile = 0;



    do {
        badge3Math = Math.floor(Math.random() * howmanybadges);
        ++iFromWhile;
    } while ((badge3Math === badge2Math || badge3Math === badge1Math) && iFromWhile < 10);
    console.log('badge3 ?= otros badges');
    if (badge3Math === badge2Math || badge3Math === badge1Math) {
        badge1Math = 2;
        badge2Math = 3;
        badge3Math = 4;

        badge1 = [badgesObject[Object.keys(badgesObject)[badge1Math]].route, badgesObject[Object.keys(badgesObject)[badge1Math]].alt];

        badge2 = [badgesObject[Object.keys(badgesObject)[badge2Math]].route, badgesObject[Object.keys(badgesObject)[badge2Math]].alt];
        // console.log('3');
        // console.log(badge1);
        //  console.log('4');
        // console.log(badge2);
    }
    console.log('asignams badge 3');
    var badge3 = [badgesObject[Object.keys(badgesObject)[badge3Math]].route, badgesObject[Object.keys(badgesObject)[badge3Math]].alt];
    console.groupEnd();
    // console.log(badge1);
    // console.log(badge2);
    // console.log(badge3);

    // console.log('5');
    // console.log(badge3);


    //button.setAttribute("name", "helloButton");


    console.group('Asignacion de imágenes');
    /*if (!document.getElementById('carousel-item-3').classList.contains("active")) {
        // console.log('If 1');
        document.getElementById('carouselIMG3').setAttribute("src", `${baseRoute}${badge3[0]}`);
        document.getElementById('carouselIMG3').setAttribute("alt", `${badge3[1]}`);

    }
    if (!document.getElementById('carousel-item-2').classList.contains("active")) {
        // console.log('If 2');

        document.getElementById('carouselIMG2').setAttribute("src", `${baseRoute}${badge2[0]}`);
        document.getElementById('carouselIMG1').setAttribute("alt", `${badge2[1]}`);
    }
    if (!document.getElementById('carousel-item-1').classList.contains("active")) {
        // console.log('If 3');

        document.getElementById('carouselIMG1').setAttribute("src", `${baseRoute}${badge1[0]}`);
        document.getElementById('carouselIMG1').setAttribute("alt", `${badge1[1]}`);

    }*/

    if (!document.getElementById('carousel-item-3').classList.contains("active")) {
        // console.log('If 1');


    }
    if (!document.getElementById('carousel-item-2').classList.contains("active")) {
        // console.log('If 2');


    }
    if (!document.getElementById('carousel-item-1').classList.contains("active")) {
        // console.log('If 3');



    }
    console.groupEnd();
    return [baseRoute, badge1[0], badge2[0], badge3[0]];
    // return baseRoute+badge1[0];


    //console.log(`${baseRoute}${badge3[0]}`)
    //console.log(`${badge3[1]}`);

}









export { useBadges, useBadgeRandomization };