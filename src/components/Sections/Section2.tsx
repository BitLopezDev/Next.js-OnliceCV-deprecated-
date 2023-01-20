import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import './../../styles/fullstack.module.scss';
// ./../../assets/users/Santiago/credenciales/NextU/PHP_OOP.png
import { WebDev2016 } from './innerSections/Section2/2016';
import { OtrosNextU } from './innerSections/Section2/OtrosNextU';
import { FrontEndNextU } from './innerSections/Section2/FrontEndNextU';


import './../../../node_modules/bootstrap/dist/css/bootstrap.css';
//import './../../scripts/common';
/*import './../../scripts/Libs/bootstrap';
import './../../scripts/Libs/bootstrap.bundle';
import './../../scripts/index';*/


function hideElement(name, ...others) {

    //document.getElementById(elementsofaccordion[Object.keys(elementsofaccordion)[i]].li).classList.remove('active');

    //document.getElementById('carousel-item-1').classList.contains("active")
    if (document.getElementById(name).classList.contains("seesconde")) {
        document.getElementById(name).classList.remove('seesconde');
    }
    //console.log(others);


    for (let i = 0; i < others.length; i++) {
        // const StringArray = othersArray[i];
        if (!document.getElementById(others[i]).classList.contains("seesconde")) {
            document.getElementById(others[i]).classList.add('seesconde');
        }

    }
    //console.log(othersArray);
}



class Section2 extends Component {



    state = { activeItem: 'Desarrollador Web 2016' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        var thename = name;
        console.log(name);
        switch (thename) {
            case 'Desarrollador Web 2016':
                hideElement('wd', 'FrontEnd', 'otros');
                break;
            case 'Frontend con JS 2022':
                hideElement('FrontEnd', 'wd', 'otros');
                break;
            case 'Otros Cursos 2022':
                hideElement('otros', 'FrontEnd', 'wd');
                break;
        }

    }

    render() {
        const { activeItem } = this.state

        return (
            <React.Fragment>
                <Menu pointing secondary>
                    <Menu.Item
                        name='Desarrollador Web 2016'

                        active={activeItem === 'Desarrollador Web 2016'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Frontend con JS 2022'

                        active={activeItem === 'Frontend con JS 2022'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Otros Cursos 2022'

                        active={activeItem === 'Otros Cursos 2022'}
                        onClick={
                            this.handleItemClick

                        }
                    />

                </Menu>

                <Segment id='wd' className=''>

                    <WebDev2016></WebDev2016>
                </Segment>
                <Segment id='FrontEnd' className='seesconde'>

                    <FrontEndNextU></FrontEndNextU>
                </Segment>
                <Segment id='otros' className='seesconde'>

                    <OtrosNextU></OtrosNextU>

                </Segment>
                {/* <img src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' /> */}

            </React.Fragment>
        )
    }
}






export default Section2;