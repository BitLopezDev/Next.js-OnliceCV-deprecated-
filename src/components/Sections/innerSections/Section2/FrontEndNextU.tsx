import React from 'react';
import { Image } from 'semantic-ui-react';
//import Image from 'next/image';
import './../../../../../node_modules/bootstrap/dist/css/bootstrap.css';
//import certificado from './../../../../public/assets/users/Santiago/credenciales/NextU/Certificado.png';
import Certificado from './../../../../../public/assets/users/Santiago/credenciales/NextU/Nuevas/FrontEnd.png';

const FrontEndNextU = () => {
    // console.log(certificado);
    return (
        <React.Fragment>

            <div id="NextUFrontend" className="divAccordion">
                <div id="tituloNextUFrontEnd">
                    <h4>Frontend con Javascript:</h4>
                </div>
                <div id="descripcionNextUFrontEnd">

                    {/* <!----> */}
                    <div className="cursoAccordion justify-content-start">
                        <p>Curso de Desarrollador Frontend con Javascript completado al:</p>
                    </div>
                    <div className="">
                        <div className="progress">
                            <div className="progress-bar fondogradiente" style={{ width: '100%' }}>100%</div>
                        </div>
                    </div>

                    <br />

                    <div className="card border-0" style={{ width: 'auto' }}>
                        <Image className="card-img-top"
                            src={Object.entries(Certificado)[0].slice(1)}
                            alt="Certificado de Desarrollador Frontend con Javascript" />
                        <div className="card-body">
                            <h4 className="card-title">Certificado de Desarrollador Frontend con Javascript</h4>
                            <p className="card-text">Este curso me permitió actualizarme en el mundo del desarrolo web: novedades de JS como las clases y promesas, conocer frameworks/librerías como React.js, y conceptos nuevos de css como Flexbox y Grid.</p>
                            <a href="https://www.credential.net/024265d2-0d91-4c00-b8a6-08d7c8b19fef"
                                className="btn fondogradiente border-0" target="_blank" rel="noreferrer">Ver certificado</a>
                        </div>
                    </div>



                </div>

            </div>

        </React.Fragment>

    );
}

export { FrontEndNextU };