import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import Navbar from '../Header/Navbar';
import Modals from '../Modals/Modals';
import Section1 from '../Sections/Section1';
import '../../scripts/scripts';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';

type LayoutProps = {
    children?: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => (
    <>
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
export default Layout;