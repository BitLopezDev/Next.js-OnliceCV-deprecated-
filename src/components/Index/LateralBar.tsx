import React from 'react';
import { List } from 'semantic-ui-react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from './../../../public/assets/users/Santiago/imágenes/Web/circle.png';
import mail from './../../../public/assets/users/system/email.png';
import whatsapp from './../../../public/assets/users/system/whatsapp.png';
import phone from './../../../public/assets/users/system/phone.png';

const LateralBar = () => {
    return (

        <React.Fragment>

            <center>



                <Image src={Logo} alt="Avatar Logo" //style=//{`width:40px;`}
                    className="rounded-pill " width={200} />

            </center>
            <br />
            <div>
                {/* <div className="input-group">
                    <span className="" style={{ padding: 20 }}><Image src={mail} alt="Mail" //style=//{`width:40px;`}
                        className="rounded-pill " width={30} /></span>
                    <span className="" style={{ padding: 20, paddingLeft: 0 }}> santiagocomesanalopez@gmail.com</span>

                </div>

                <div className="input-group">
                    <span className="" style={{ padding: 20 }}><Image src={whatsapp} alt="Mail" //style=//{`width:40px;`}
                        className="rounded-pill " width={30} /></span>
                    <span className="" style={{ padding: 20, paddingLeft: 0 }}> 097.104.930</span>


                </div>

                <div className="input-group">
                    <span className="" style={{ padding: 20 }}><Image src={phone} alt="Mail" //style=//{`width:40px;`}
                        className="rounded-pill " width={30} /></span>
                    <span className="" style={{ padding: 20, paddingLeft: 0 }}> 2.708.14.16</span>


                </div> */}
                <List style={{ padding: 20 }}>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content><a href='mailto:santiagocomesanalopez@gmail.com'>santiagocomesanalopez@gmail.com</a></List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='phone' />
                        <List.Content>097.104.930</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='paper plane' />
                        <List.Content>
                            097.104.930
                        </List.Content>
                    </List.Item>

                </List>

            </div>
            {/* Object.entries(mail)[0].slice(1) */}


        </React.Fragment >

    );
}

export { LateralBar };