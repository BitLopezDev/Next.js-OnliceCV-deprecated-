import React from 'react'
import { Image, Button, Header, Icon, Modal, Dimmer } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import CertificadoNextU from './../../../../public/assets/users/Santiago/credenciales/NextU/Certificado.png';
import CertificadoFullStackJS from './../../../../public/assets/users/Santiago/credenciales/Platzi/FullStackJS.png';

import './../../../styles/2016Modal.module.scss';
const inlineStyle = {
  modal: {
    marginTop: '0px !important',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};
function ObjectSlice(value) {

  if (typeof value === 'object') {
    return Object.entries(value)[0].slice(1);

  } else {

    return null;
  }

}

function DiplomaModal(props) {
  const [open, setOpen] = React.useState(false);
  var certificado;

  var nodiploma = '';

  switch (props.which) {
    case 'Web2016':
      certificado = ObjectSlice(CertificadoNextU);

      break;
    case 'fullstackJS':
      certificado = ObjectSlice(CertificadoFullStackJS);


      break;
    case 'HTMLCSS':
      certificado = ObjectSlice(nodiploma) || 'https://static.platzi.com/media/learningpath/badges/08261d05-1b55-4c23-b9b4-8427d4247835.jpg';
      break;
    case 'BackendPHP':
      certificado = ObjectSlice(nodiploma) || 'https://static.platzi.com/media/learningpath/badges/824ba606-359a-453b-925e-e1b81bed8785.jpg';
      break;
    case 'FrontendReact':
      certificado = ObjectSlice(nodiploma) || 'https://static.platzi.com/media/learningpath/badges/1690f090-fcce-4456-9e56-2882c2e68a8d.jpg';
      break;
    case 'JavaScriptProf':
      certificado = ObjectSlice(nodiploma) || 'https://static.platzi.com/media/learningpath/badges/f6885a96-a017-4123-a503-c776de5223de.jpg';
      break;
    case 'Fullstacknext':
      certificado = ObjectSlice(nodiploma) || 'https://static.platzi.com/media/learningpath/badges/4c39108f-765c-4d0c-ac66-addf1bf1730a.jpg';
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
