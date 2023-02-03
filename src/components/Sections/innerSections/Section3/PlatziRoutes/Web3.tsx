import React from 'react';
import { Image, Item } from 'semantic-ui-react'
//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FullStackModal } from '../Modals/FullStackModal';
const Web3 = () => {
    return (
        <React.Fragment >
            <div >
                {/* style={{ maxHeight: 373 }} */}
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny'  >
                            {/* <FullStackModal /> */}
                            {/* https://react.semantic-ui.com/images/wireframe/image.png */}
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            <h6>(Click en certificado para verlo)</h6>
                        </Item.Image>

                        <Item.Content>
                            <Item.Header as='a'>Desarrollo Web3 | 2023</Item.Header>
                            <Item.Meta> <div className="progress">
                                <div className="progress-bar fondogradiente" style={{ width: '0%' }}>0%</div>
                            </div></Item.Meta>
                            <Item.Description>
                                <p> Si algo aprendí en informática es que hay que adelantarse, no dejarse adelantar. En este curso me adentro a la nueva versión de la Web que se nos aproxima y que, muy posiblemente, sea el futuro de internet tal y como la concemos, así como el de las ciberempresas del futuro.</p>
                            </Item.Description>
                            {/* <Item.Extra>Additional Details</Item.Extra> */}
                        </Item.Content>
                    </Item>
                </Item.Group>
                <div style={{ 'overflow': 'scroll', maxHeight: 155 }}>
                    <h4>Algunos cursos relevantes de la ruta:</h4>

                    <table className="table table-striped" >
                        <thead>
                            <tr>
                                <th>Logo</th>
                                <th>Nombre</th>
                                <th>Terminación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Image src="https://static.platzi.com/media/achievements/piezas-fundamentos-web3_badge-fe7790f7-803c-4e5c-bd22-923807b98da2.png" width={26} /></td>
                                <td>Audiocurso de Fundamentos de Web3</td>
                                <td>0% |   {/*<a href='' target='_blank'>ver certificado</a>*/}</td>
                            </tr>
                            <tr>
                                <td><Image src="https://static.platzi.com/media/achievements/piezas-ethereum-developers_badge-2bb9aed8-f119-429b-b925-7ca075749d3b.png" width={26} /></td>
                                <td>Curso de Ethereum para Developers</td>
                                <td>0% |   {/*<a href='' target='_blank'>ver certificado</a>*/}</td>
                            </tr>
                            <tr>
                                <td><Image src="https://static.platzi.com/media/achievements/badge-piezas-aplicaciones-descentralizadas-ethereum-888d2b61-6fb7-4e29-8f6c-fd6c895.png" width={26} /></td>
                                <td>Curso de Arquitectura de Aplicaciones Descentralizadas en Ethereum</td>
                                <td>0% |   {/*<a href='' target='_blank'>ver certificado</a>*/}</td>
                            </tr>
                            <tr>
                                <td><Image src="https://static.platzi.com/media/achievements/piezas-dapp-introduccion-desarrollo-aplicaciones-descentralizadas_badge-5bed8110-fd.png" width={26} /></td>
                                <td>Curso de Dapps: Introducción al Desarrollo de Aplicaciones Descentralizadas</td>
                                <td>0% |   {/*<a href='' target='_blank'>ver certificado</a>*/}</td>
                            </tr>
                            <tr>
                                <td><Image src="https://static.platzi.com/media/achievements/piezas-desarrollo-frontend-aplicaciones-descentraliadas-web3js_badge-724d7e66-9c62-.png" width={26} /></td>
                                <td>Curso de Desarrollo Frontend de Aplicaciones Descentralizadas con Web3.Js</td>
                                <td>0% |   {/*<a href='' target='_blank'>ver certificado</a>*/}</td>
                            </tr>
                            <tr>
                                <td><Image src="https://static.platzi.com/media/achievements/piezas-casos-uso-smart-contracts-badge-0bbbbe62-acaa-47d8-bc0a-0e7ac4c7a4fc.png" width={26} /></td>
                                <td>Curso de Casos de Uso de Smart Contracts</td>
                                <td>0% |   {/*<a href='' target='_blank'>ver certificado</a>*/}</td>
                            </tr>
                            <tr>
                                <td><Image src="https://static.platzi.com/media/achievements/solidity_badge-ca6318a4-8808-4e95-9b1a-ccdd7016589e.png" width={26} /></td>
                                <td>Curso de Introducción a Solidity</td>
                                <td>0% |   {/*<a href='' target='_blank'>ver certificado</a>*/}</td>
                            </tr>
                            <tr>
                                <td><Image src="https://static.platzi.com/media/achievements/badge-lab-pro-js-web3-707ccdb1-93e7-45a7-991b-2bbd710274e8.png" width={26} /></td>
                                <td>Laboratorio Profesional de JavaScript: Web3 con Programación Funcional</td>
                                <td>0% |   {/*<a href='' target='_blank'>ver certificado</a>*/}</td>
                            </tr>



                            {/* <tr>
                            <td><Image src="" width={26} /></td>
                            <td></td>
                            <td>0% |   <a href='55' target='_blank'>ver certificado</a></td>
                        </tr> */}

                        </tbody>
                    </table>
                </div>
            </div>

        </React.Fragment>
    );

}

export { Web3 };