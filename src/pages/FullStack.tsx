import * as React from 'react';
import Layout from '../components/Layout/Layout';
import IntroBubble from '../components/Sections/IntroBubble';
import NextuCourses from '../components/Sections/NextuCourses';
import {PlatziCourses} from '../components/Sections/PlatziCourses';
import { PlatziNextuThanks } from '../components/Sections/PlatziNextuThanks';

import { CoursesCards } from '../components/Sections/CoursesCards';
import Head from 'next/head';

import './../../node_modules/bootstrap/dist/css/bootstrap.css';
const FullStack = () => {
    return (
        <>
            <Head>
                <title>CV Online | Web Development</title>
            </Head>
            <Layout>
                <IntroBubble />
                <NextuCourses >

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
                </NextuCourses>
                <PlatziCourses />
                <CoursesCards />
                <PlatziNextuThanks />
                {/* <Section5 /> */}


            </Layout>
        </>
    );
}

export default FullStack;
//TODO: Difs between sections: Code stinks. Refactor: generate abstractions.