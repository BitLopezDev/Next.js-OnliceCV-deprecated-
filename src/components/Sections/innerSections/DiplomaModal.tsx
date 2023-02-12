import React from 'react'
import { Image, Button, Header, Icon, Modal, Dimmer } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import CertificadoNextU from './../../../../public/assets/users/Santiago/credenciales/NextU/Certificado.png';
import CertificadoPlatzi from './../../../../public/assets/users/Santiago/credenciales/Platzi/FullStackJS.png';

import './../../../styles/2016Modal.module.scss';
const inlineStyle = {
  modal: {
    marginTop: '0px !important',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

function DiplomaModal(props) {
  const [open, setOpen] = React.useState(false);
  var certificado;
 


  switch (props.which) {
    case 'Web2016':
      certificado = Object.entries(CertificadoNextU)[0].slice(1);
      break;
    case 'fullstackJS':
      certificado = Object.entries(CertificadoPlatzi)[0].slice(1);

      break;

    default:
      certificado = 'https://react.semantic-ui.com/images/wireframe/image.png';
      break;
  }


  return (
    <center>


      <Modal
        dimmer={Dimmer}
        basic
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Image src={certificado} />}
        style={inlineStyle.modal}>
        <br /> <br />

        <Modal.Content style={{ width: '100% !important' }}>
          <center>
            <br />
            <hr />
            <Image src={certificado} />
          </center>
        </Modal.Content>
        <Modal.Actions>

          <Button color='green' inverted onClick={() => setOpen(false)}>
            <Icon name='checkmark' /> Cerrar
          </Button>
        </Modal.Actions>
      </Modal>
    </center>

  )
}

export { DiplomaModal };
