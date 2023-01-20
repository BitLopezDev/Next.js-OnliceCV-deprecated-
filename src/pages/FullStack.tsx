import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Section1 from '../components/Sections/Section1';
import Section2 from '../components/Sections/Section2';
import Section3 from '../components/Sections/Section3';
import { Section4 } from '../components/Sections/Section4';

import './../scripts/scripts';
import './../../node_modules/bootstrap/dist/css/bootstrap.css';
const FullStack = () => {
    return (
        <>
            <Layout>
                <Section1 />
                <Section2 >

                    {/* <div>
                        <div className="ui pointing secondary menu">
                            <a className="active item">Home</a>
                            <a className="item">Messages</a>
                            <a className="item">Friends</a>
                            <div className="right menu">
                                <a className="item">Logout</a>
                            </div>
                            </div>
                            <div className="ui segment">
                                <img src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                                </div></div> */}
                </Section2>
                <Section3 />
                <Section4 />

            </Layout>
        </>
    );
}

export default FullStack;