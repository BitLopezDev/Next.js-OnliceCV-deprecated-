import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Section1 from '../components/Sections/Section1';
// import Section2 from '../components/Sections/Section2';
// import Section3 from '../components/Sections/Section3';
// import { Section4 } from '../components/Sections/Section4';
// import { Section5 } from '../components/Sections/Section5';
import Head from 'next/head';
//import './../scripts/scripts';
import './../../node_modules/bootstrap/dist/css/bootstrap.css';
import './../styles/security.module.scss';
const Security = () => {
    React.useEffect(() => {

    })
    return (
        <>
            <Head>
                <title>CV Online | Cybersecurity</title>
            </Head>
            <Layout>

                <>
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-4 sectile">
                                <div className="tile-progress fondogradiente">
                                    <div className="tile-header">
                                        <h4>Inteligencia en ciberseguridad </h4>
                                        <span>Estudios en Ciberinteligencia</span>
                                    </div>
                                    <div className="tile-progressbar">
                                        <span data-fill="23.2%" style={{ "width": "23.2%" }}></span>
                                    </div>
                                    <div className="tile-footer">
                                        <h4>
                                            <span className="pct-counter">23.2</span>% 
                                        </h4>
                                        <span>Cursado hasta el momento</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 sectile">
                                <div className="tile-progress fondoantigradiente">
                                    <div className="tile-header">
                                        <h4>Normal ISO/IEC 27001 </h4>
                                        <span>Estudios en norma ISO/IEC 27001</span>
                                    </div>
                                    <div className="tile-progressbar">
                                        <span data-fill="78%" style={{ "width": "78%" }}></span>
                                    </div>
                                    <div className="tile-footer">
                                        <h4>
                                            <span className="pct-counter">78</span>% 
                                        </h4>
                                        <span>Cursado hasta el momento</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 sectile">
                                <div className="tile-progress fondogradiente">
                                    <div className="tile-header">
                                        <h4>Análisis de malware</h4>
                                        <span>Estudios de análisis de malware</span>
                                    </div>
                                    <div className="tile-progressbar">
                                        <span data-fill="22%" style={{ "width": "22%" }}></span>
                                    </div>
                                    <div className="tile-footer">
                                        <h4>
                                            <span className="pct-counter">22</span>% 
                                        </h4>
                                        <span>Cursado hasta el momento</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>


                </>

            </Layout>
        </>
    );
}

export default Security;