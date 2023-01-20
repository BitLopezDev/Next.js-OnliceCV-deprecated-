import React, { Component } from 'react';
import { Image, Item, Button, Header, Icon, Modal } from 'semantic-ui-react';
//import Image from 'next/image';
import './../../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Modal2016 } from './Modal2016';
//import certificado from './../../../../public/assets/users/Santiago/credenciales/NextU/Certificado.png';
import Certificado from './../../../../../public/assets/users/Santiago/credenciales/NextU/Certificado.png';

const WebDev2016 = () => {
    // console.log(certificado);
    const [open, setOpen] = React.useState(false)
    return (
        <React.Fragment>
            <Item.Group>
                <Item>
                    <Item.Image size='tiny'  >
                        <Modal2016 />
                    </Item.Image>

                    <Item.Content>
                        <Item.Header as='a'>Desarrollador Web | 2016</Item.Header>
                        <Item.Meta> <div className="progress">
                            <div className="progress-bar fondogradiente" style={{ width: '100%' }}>100%</div>
                        </div></Item.Meta>
                        <Item.Description>
                            <p>En este curso aprendí los fundamentos de la programación Web (archivos estáticos), bases de datos, XML, etcétera. Fue mi puerta de entrada al mundo de la computación y la informática.</p>
                        </Item.Description>
                        {/* <Item.Extra>Additional Details</Item.Extra> */}
                    </Item.Content>
                </Item>
            </Item.Group>

            {/* //////////////////////////////// */}



        </React.Fragment>

    );
}

export { WebDev2016 };