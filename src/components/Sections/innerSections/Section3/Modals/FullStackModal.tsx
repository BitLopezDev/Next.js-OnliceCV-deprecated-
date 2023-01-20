import React from 'react'
import { Image, Button, Header, Icon, Modal, Dimmer } from 'semantic-ui-react'
import Certificado from './../../../../../public/assets/users/Santiago/credenciales/NextU/Certificado.png';
import './../../../../styles/2016Modal.module.scss';
const inlineStyle = {
  modal: {
    marginTop: '0px !important',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

function FullStackModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <center>
      <Modal
        dimmer={Dimmer}
        basic
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Image src={Object.entries(Certificado)[0].slice(1)} />}
        style={inlineStyle.modal}>
        <br /> <br />

        <Modal.Content style={{ width: '100% !important' }}>
          <center>
            <br />
            <hr />
            <Image src={Object.entries(Certificado)[0].slice(1)} />
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

export { FullStackModal };
