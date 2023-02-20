import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Section1 from '../components/Sections/Section1';
import Section2 from '../components/Sections/Section2';
import Section3 from '../components/Sections/Section3';
import { Section4 } from '../components/Sections/Section4';
// import { Section5 } from '../components/Sections/Section5';
import { Section6 } from '../components/Sections/Section6';
import Head from 'next/head';
//require('./../scripts/mails/nodemailer');

//import './../scripts/scripts';
import './../../node_modules/bootstrap/dist/css/bootstrap.css';
const FullStack = () => {
    return (
        <>
            <Head>
                <title>CV Online | Web Development</title>
            </Head>
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
                <Section6 />
                <Section4 />
                {/* <Section5 /> */}


            </Layout>
        </>
    );
}

export default FullStack;
//TODO: Difs between sections: Code stinks. Refactor: generate abstractions.