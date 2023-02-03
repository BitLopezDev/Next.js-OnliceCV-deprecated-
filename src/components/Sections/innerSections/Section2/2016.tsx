import React, { Component } from 'react';
import { Image, Item, Button, Header, Icon, Modal } from 'semantic-ui-react';
//import Image from 'next/image';
import './../../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { DiplomaModal } from './../DiplomaModal';
//import certificado from './../../../../public/assets/users/Santiago/credenciales/NextU/Certificado.png';
import Certificado from './../../../../../public/assets/users/Santiago/credenciales/NextU/Certificado.png';
import HTML5 from './../../../../../public/assets/users/Santiago/credenciales/NextU/HTML5.png';
import CSS3 from './../../../../../public/assets/users/Santiago/credenciales/NextU/CSS3.png';
import JS from './../../../../../public/assets/users/Santiago/credenciales/NextU/JavaScript.png';
import jQuery from './../../../../../public/assets/users/Santiago/credenciales/NextU/jQuery_básico.png';
import jQueryUI from './../../../../../public/assets/users/Santiago/credenciales/NextU/jQuery_UI_-_Web.png';
import PHPOOP from './../../../../../public/assets/users/Santiago/credenciales/NextU/PHP_OOP.png'
import XML from './../../../../../public/assets/users/Santiago/credenciales/NextU/XML.png';




const WebDev2016 = () => {
    // console.log(certificado);
    const [open, setOpen] = React.useState(false)
    return (
        <React.Fragment>
            <Item.Group>
                <Item>
                    <Item.Image size='tiny'  >
                        <DiplomaModal which={'Web2016'} />
                    </Item.Image>

                    <Item.Content>
                        <Item.Header as='a'>Desarrollador Web | 2016</Item.Header>
                        <Item.Meta> <div className="progress">
                            <div className="progress-bar fondogradiente" style={{ width: '100%' }}>100%</div>
                        </div></Item.Meta>
                        <Item.Description>
                            <p>En este curso aprendí los fundamentos de la programación Web (archivos estáticos), bases de datos, XML, etcétera. Fue mi puerta de entrada al mundo de la computación y la informática.</p> <h6>(Click en certificado para verlo)</h6>
                        </Item.Description>
                        {/* <Item.Extra>Additional Details</Item.Extra> */}
                    </Item.Content>
                </Item>
            </Item.Group>

            {/* //////////////////////////////// */}

            <h5 style={{ paddingTop: 10 }}>Aglunos módulos del curso:</h5>

            <center>
                <div id="Badges" className="">
                    <div className="row">
                        <div className="container mt-3 col-sm-4">
                            <div className="card border-0" style={{ maxWidth: 100 }}>
                                <Image className="card-Image-top" src={Object.entries(HTML5)[0].slice(1)}
                                    alt="HTML 5" style={{ width: '100%' }} />
                                {/* src="./../../../../../public/assets/users/Santiago/credenciales/NextU/HTML5.png" */}

                            </div>

                        </div>

                        <div className="container mt-3 col-sm-4 ">
                            <div className="card border-0" style={{ maxWidth: 100 }}>
                                <Image className="card-Image-top" src={Object.entries(CSS3)[0].slice(1)}
                                    alt="CSS 3" style={{ width: '100%' }} />

                            </div>

                        </div>
                        <div className="container mt-3 col-sm-4 ">
                            <div className="card border-0" style={{ maxWidth: 100 }}>
                                <Image className="card-Image-top" src={Object.entries(JS)[0].slice(1)}
                                    alt="JavaScript" style={{ width: '100%' }} />

                            </div>

                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="container mt-3  col-sm-3">
                            <div className="card border-0" style={{ maxWidth: 100 }}>
                                <Image className="card-Image-top" src={Object.entries(jQuery)[0].slice(1)}
                                    alt="jQuery" style={{ width: '100%' }} />

                            </div>

                        </div>

                        <div className="container mt-3 col-sm-3">
                            <div className="card border-0" style={{ maxWidth: 100 }}>
                                <Image className="card-Image-top"
                                    src={Object.entries(jQueryUI)[0].slice(1)} alt="jQuery UI"
                                    style={{ width: '100%' }} />

                            </div>

                        </div>
                        <div className="container mt-3 col-sm-3">
                            <div className="card border-0" style={{ maxWidth: 100 }}>
                                <Image className="card-Image-top" src={Object.entries(PHPOOP)[0].slice(1)}
                                    alt="PHP OOP 5" style={{ width: '100%' }} />

                            </div>

                        </div>

                        <div className="container mt-3 col-sm-3 ">
                            <div className="card border-0 " style={{ maxWidth: 100 }}>
                                <Image className="card-Image-top" src={Object.entries(XML)[0].slice(1)} alt="XML"
                                    style={{ width: '100%' }} />

                            </div>

                        </div>
                    </div>
                </div>
            </center>

        </React.Fragment>

    );
}

export { WebDev2016 };