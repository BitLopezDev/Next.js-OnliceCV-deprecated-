import React from 'react';

//import Image from 'next/image';
import './../../../../../node_modules/bootstrap/dist/css/bootstrap.css';
//import certificado from './../../../../public/assets/users/Santiago/credenciales/NextU/Certificado.png';
//import Certificado from './../../../../../public/assets/users/Santiago/credenciales/NextU/Nuevas/FrontEnd.png';

const OtrosNextU = () => {

    return (
        <React.Fragment>


            <div id="tituloNextUotros">
                <h4>Otros cursos en NextU:</h4>
            </div>
            <div id="descripcionNextUotros">

                <div className="cursoAccordion justify-content-start">
                    <p>Cursos adicionales</p>
                </div>
                <div className=" " style={{ color: 'black' }}>
                    <a className="btn fondoniceblue border-0 "
                        href="https://www.credential.net/5b308137-854e-4d5b-8df3-e8f260ecb065"
                        target="_blank">Herramientas de seguridad</a>
                    <a className="btn fondoniceblue border-0 "
                        href="https://www.credential.net/9f2a679f-fd77-4dbd-ab69-e4e788709300" target="_blank">Hardware
                        del computador</a>
                    <a className="btn fondoniceblue border-0 "
                        href="https://www.credential.net/b94c958e-df5c-4de4-843e-7596230a6851" target="_blank">Soporte
                        técnico y troubleshooting</a>
                    <a className="btn fondoniceblue border-0 "
                        href="https://www.credential.net/57163fba-f91b-4939-81b8-43deb9dfecac" target="_blank">Software y
                        sistemas operativos</a>
                    <a className="btn fondoniceblue border-0 "
                        href="https://www.credential.net/profile/santiagocomesanalopez/wallet" target="_blank">Vea todos
                        mis cursos de NextU</a>

                </div>




            </div>




        </React.Fragment>

    );
}

export { OtrosNextU };