import React, { Component } from 'react'
import { Menu, Segment, Grid } from 'semantic-ui-react'
import './../../styles/fullstack.module.scss';
// ./../../assets/users/Santiago/credenciales/NextU/PHP_OOP.png
import { FullStackRoute } from './innerSections/Section3/PlatziRoutes/FullStackRoute';
import { FrontendReactRoute } from './innerSections/Section3/PlatziRoutes/FrontendReactRoute';
import { FullStackNextRoute } from './innerSections/Section3/PlatziRoutes/FullStackNextRoute';
import { HTMLCSSRoute } from './innerSections/Section3/PlatziRoutes/HTMLCSSRoute';


import './../../../node_modules/bootstrap/dist/css/bootstrap.css';
//import './../../scripts/common';
/*import './../../scripts/Libs/bootstrap';
import './../../scripts/Libs/bootstrap.bundle';
import './../../scripts/index';*/


function hideElement(segment) {
    console.log(segment);
    const segmentsArray = ['FSJS', 'FDR', 'FSN', 'HCaP', 'JaP', 'Web3',]

    if (document.getElementById(segment).classList.contains("seesconde")) {
        document.getElementById(segment).classList.remove('seesconde');
    }

    for (let i = 0; i < segmentsArray.length; i++) {
        if (!document.getElementById(segmentsArray[i]).classList.contains("seesconde") && document.getElementById(segmentsArray[i]) != document.getElementById(segment)) {
            document.getElementById(segmentsArray[i]).classList.add('seesconde');
        }
    }

    //console.log(segmentsArray);
}



class Section3 extends Component {



    state = { activeItem: 'Desarrollador Web 2016' }

    handleItemClick = (e, { name, segment }) => {
        this.setState({ activeItem: name })


        hideElement(segment);
    }

    render() {
        const { activeItem } = this.state

        return (
            <React.Fragment>
                <br />
                <br />

                <center>
                    <div style={{ maxWidth: 500 }}>

                        <h2>

                            Estudios Técnicos en Platzi:</h2>
                        <h6>Full Stack | JavaScript y HTML a profundidad | React | Web3</h6>
                    </div>
                </center>
                <br />


                <Grid>
                    <Grid.Column width={4}>
                        <Menu fluid vertical tabular>
                            <Menu.Item
                                name='Full Stack con JavaScript'
                                active={activeItem === 'Full Stack con JavaScript'}
                                onClick={this.handleItemClick}
                                segment='FSJS'
                            />
                            <Menu.Item
                                name='Frontend a profundidad con React'
                                active={activeItem === 'Frontend a profundidad con React'}
                                onClick={this.handleItemClick}
                                segment='FDR'
                            />
                            <Menu.Item
                                name='Full Stack con Next.js'
                                active={activeItem === 'Full Stack con Next.js'}
                                onClick={this.handleItemClick}
                                segment='FSN'
                            />
                            <Menu.Item
                                name='HTML y CSS a profundidad'
                                active={activeItem === 'HTML y CSS a profundidad'}
                                onClick={this.handleItemClick}
                                segment='HCaP'
                            />
                            <Menu.Item
                                name='JavaScript a profundidad'
                                active={activeItem === 'JavaScript a profundidad'}
                                onClick={this.handleItemClick}
                                segment='JaP'
                            />
                            <Menu.Item
                                name='Desarrollo Web3'
                                active={activeItem === 'Desarrollo Web3'}
                                onClick={this.handleItemClick}
                                segment='Web3'
                            />
                        </Menu>
                    </Grid.Column>

                    <Grid.Column stretched width={12}>
                        <Segment id='FSJS' >
                            <FullStackRoute />

                        </Segment>
                        <Segment id='FDR' className='seesconde'>
                            <FrontendReactRoute />
                        </Segment>
                        <Segment id='FSN' className='seesconde'>
                            <FullStackNextRoute />
                        </Segment>
                        <Segment id='HCaP' className='seesconde'>
                            <HTMLCSSRoute />
                        </Segment>
                        <Segment id='JaP' className='seesconde'>
                            JaP
                        </Segment>
                        <Segment id='Web3' className='seesconde'>
                            Web3
                        </Segment>
                    </Grid.Column>
                </Grid>




            </React.Fragment >
        )
    }
}






export default Section3;