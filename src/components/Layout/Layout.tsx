import React from 'react';
import { Container } from 'semantic-ui-react';
import Navbar from '../Header/Navbar';
import Modals from '../Modals/Modals';
import Headf from '../Head/Headf';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';
import Script from 'next/script';
import Common from '../../Hooks/Common';


type LayoutProps = {
    children?: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            {/* <Script src={"./../../scripts/common.js"} ></Script>*/ }

            <Script src="./scripts/Libs/bootstrap.bundle.js" />

            <Script src="./scripts/Libs/jquery-3.6.1.min.js" />

            <Headf ogType="website">



            </Headf>
            <header>
                <Navbar />
                <Modals />

            </header>


            <Container text>

                <section id="GlobalSection">
                    {children}


                </section>

            </Container>

        </>
    );
};
export default Layout;