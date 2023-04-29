import React from 'react';
// import { Image } from 'semantic-ui-react';
import { CourseSection8 } from './innerSections/BasicCourseList/CourseListBasic';

import './../../../node_modules/bootstrap/dist/css/bootstrap.css';
// ./../../assets/users/Santiago/credenciales/NextU/PHP_OOP.png
// import { FullStackRoute } from './innerSections/Section3/PlatziRoutes/FullStackRoute';
// import { FrontendReactRoute } from './innerSections/Section3/PlatziRoutes/FrontendReactRoute';
// import { FullStackNextRoute } from './innerSections/Section3/PlatziRoutes/FullStackNextRoute';
// import { HTMLCSSRoute } from './innerSections/Section3/PlatziRoutes/HTMLCSSRoute';
// import { JSaPRoute } from './innerSections/Section3/PlatziRoutes/JSaPRoute'
// import { Web3 } from './innerSections/Section3/PlatziRoutes/Web3';





//import './../../scripts/common';
/*import './../../scripts/Libs/bootstrap';
import './../../scripts/Libs/bootstrap.bundle';
import './../../scripts/index';*/

const PlatziSecurity = () => {
    return (

        <React.Fragment>
            <section className="progress-section">
                <div className="container">
                    <div className="row">
                        <h1>Ciberseguridad en platzi</h1>
                        <div className="col-md-4">
                            <div className="progress-diamond progress-diamond-one fondogradiente">
                                <h2>67%</h2>
                            </div>
                            <br /> <br />
                            <p>Ingeniería Social </p>
                        </div>
                        <div className="col-md-4">
                            <div className="progress-diamond progress-diamond-two fondogradiente">
                                <h2>19%</h2>
                            </div>
                            <br /> <br />
                            <p>Ciberinteligencia</p>
                        </div>

                        <div className="col-md-4">
                            <div className="progress-diamond progress-diamond-three fondogradiente">
                                <h2>0%</h2>
                            </div>
                            <br /> <br />
                            <p>Hacking Ético</p>
                        </div>



                    </div>
                    <br /><br /><br />


                    <div className="row">

                        <div className="col-md-4">
                            <div className="progress-diamond progress-diamond-zero fondoantigradiente">
                                <h2>0%</h2>
                            </div>
                            <br /> <br />
                            <p>Pentesting </p>
                        </div>
                        <div className="col-md-4">
                            <div className="progress-diamond progress-diamond-zero fondoantigradiente">
                                <h2>0%</h2>
                            </div>
                            <br /> <br />
                            <p>Análisis de Malware</p>
                        </div>

                        <div className="col-md-4">
                            <div className="progress-diamond progress-diamond-zero fondoantigradiente">
                                <h2>0%</h2>
                            </div>
                            <br /> <br />
                            <p>DLP</p>
                        </div>



                    </div>


                </div>
            </section>
            
            <section>
            <button data-bs-toggle="collapse" data-bs-target="#demo" className='btn fondogradiente border-0'>Cursos relevantes de las rutas:</button>
        
            <div id="demo" className="collapse">
            <h3>Seguridad inrmática:</h3>
           
            <CourseSection8 src={'https://static.platzi.com/media/achievements/badge-norma-iso-27001-86ef8bd1-b94b-4708-be13-72043fff9599.png'} dimension={32} course={'Curso de Preparación para la Certificación en la Norma ISO 27001'} porcent={'18%'} />
            <CourseSection8 src={'https://static.platzi.com/media/achievements/badge_introduccion-a-la-ingenienieria-social-0bed421d-0046-4cdb-a453-89baae9edef8.png'} dimension={32} course={'Curso de Introducción a la Ingeniería Social: Técnicas, Ataques y Pretexting'} porcent={'67%'} />

            <CourseSection8 src={'https://static.platzi.com/media/achievements/badge-proteccion-datos-8cae4022-f7a1-433b-b640-173991447490.png'} dimension={32} course={'Curso de DLP: Prevención de Pérdida de Datos'} porcent={'0%'} />

            <CourseSection8 src={'https://static.platzi.com/media/achievements/fundamentos-de-redes_badge-55f79f0a-d350-4879-b9ab-b148596f44ad.png'} dimension={32} course={'Curso de Redes Informáticas de Internet'} porcent={'0%'} />

            <CourseSection8 src={'https://static.platzi.com/media/achievements/badge-avanzado-redes-internet-078bd614-753b-4026-b07f-ec1db1b057fe.png'} dimension={32} course={'Curso Avanzado de Redes de Internet'} porcent={'0%'} />

            <CourseSection8 src={'https://static.platzi.com/media/achievements/badges-pentesting-42f11c0b-b153-4935-b501-2806a1c62377.png'} dimension={32} course={'Curso de Fundamentos de Pentesting'} porcent={'0%'} />

            <CourseSection8 src={'https://static.platzi.com/media/achievements/piezas-introduccion-pentesting_badge-5424b5fd-5cff-475a-a5f4-d8762816d049.png'} dimension={32} course={'Curso de Introducción al Pentesting'} porcent={'0%'} />

            <CourseSection8 src={'https://static.platzi.com/media/achievements/piezas-inteligencia-ciberseguridad_badge-2-3184008b-051b-455d-92ae-f5b14a844230.png'} dimension={32} course={'Curso de Inteligencia para la Ciberseguridad'} porcent={'19%'} />

            <CourseSection8 src={'https://static.platzi.com/media/achievements/escaneo-activo-y-analisis-de-vulnerabilidades-badge-cbaa5e86-d0d7-4ac0-9c0f-d8dd287.png'} dimension={32} course={'Curso de Escaneo Activo y Análisis de Vulnerabilidades'} porcent={'0%'} />

            <CourseSection8 src={'https://static.platzi.com/media/achievements/badge-pentesting-redes-802c682a-caf8-4dff-a2f2-c97ab409a313.png'} dimension={32} course={'Curso de Pentesting a Redes'} porcent={'0%'} />

            <CourseSection8 src={'https://static.platzi.com/media/achievements/piezas-pentesting-metasploit_badge-da7d0d95-1e60-4fc7-b735-c0600dbf7091.png'} dimension={32} course={'Curso de Pentesting con Metasploit'} porcent={'0%'} />

            <CourseSection8 src={'https://static.platzi.com/media/achievements/piezas-pentesting-servicios-red_badge-783a5cce-8a33-4fe6-a55d-f28eb6fec0ad.png'} dimension={32} course={'Curso de Hacking de Servicios de Red'} porcent={'0%'} />

            <CourseSection8 src={'https://static.platzi.com/media/achievements/piezas-landing-hacking-aplicaciones-web-server-side_badge-84757ca5-a3d1-48b8-830d-0.png'} dimension={32} course={'Curso de Hacking de Aplicaciones Web: Server Side'} porcent={'0%'} />

            <CourseSection8 src={'https://static.platzi.com/media/achievements/badge-analisis-forense-52db4679-4df1-4859-9c87-0d2efb58cd14.png'} dimension={32} course={'Curso de Informática Forense'} porcent={'0%'} />

            <CourseSection8 src={'https://static.platzi.com/media/achievements/badge-ethical-hacking-7882aa60-a295-4abd-8891-b60c482700cf.png'} dimension={32} course={'Curso de Hacking Ético'} porcent={'0%'} />

            <CourseSection8 src={'https://static.platzi.com/media/achievements/piezas-introduccion-analisis-malware_badge-981d6b4e-fae6-4087-bcb3-21f9668d89e4.png'} dimension={32} course={'Curso de Introducción al Análisis de Malware'} porcent={'0%'} />

            <CourseSection8 src={'https://static.platzi.com/media/achievements/badge-analisis-malware-dispositivos-moviles-e9bd1dd4-2010-45c2-81b0-33a4359d78c6.png'} dimension={32} course={'Curso de Análisis de Malware para Dispositivos Móviles'} porcent={'0%'} />

            <CourseSection8 src={'https://static.platzi.com/media/achievements/badges-autenticacion-ouath-a080c113-e5b5-4cd5-8fdf-3ec723355354.png'} dimension={32} course={'Curso de Autenticación con OAuth'} porcent={'0%'} />

            {/* <CourseSection8 src={''} dimension={32} course={'Prueba'} porcent={'0%'} /> */}


           

            </div>
            </section>
            <br /><br /><br />


        </React.Fragment>

    );
}

export { PlatziSecurity };





