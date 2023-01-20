import React from 'react';
import { Image, Item } from 'semantic-ui-react'
//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FullStackModal } from '../Modals/FullStackModal';
const HTMLCSSRoute = () => {
    return (
        <React.Fragment>

            <Item.Group>
                <Item>
                    <Item.Image size='tiny'  >
                        {/* <FullStackModal /> */}
                        {/* https://react.semantic-ui.com/images/wireframe/image.png */}
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <h6>(Click en certificado para verlo)</h6>
                    </Item.Image>

                    <Item.Content>
                        <Item.Header as='a'>Full Stack Developer con Next.js | 2023</Item.Header>
                        <Item.Meta> <div className="progress">
                            <div className="progress-bar fondogradiente" style={{ width: '10%' }}>10%</div>
                        </div></Item.Meta>
                        <Item.Description>
                            <p>En este curso profundizo mis conocimientos en HTML y CSS en Responsive design, preprocesadores, un curso de diseño para desarrolladores, y cursos profundos de Grid t Flexbox</p>
                        </Item.Description>
                        {/* <Item.Extra>Additional Details</Item.Extra> */}
                    </Item.Content>
                </Item>
            </Item.Group>



            <div style={{ 'overflow': 'scroll', maxHeight: 340 }}>

                <h4>Cursos relevantes de la ruta:</h4>

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
                            <td><Image src="https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png" width={26} /></td>
                            <td>Curso Definitivo de HTML y CSS</td>

                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>


                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badge-responsive-design-ce53c4fc-a4c3-41e1-a5c8-3931932343a6.png" width={26} /></td>
                            <td>Curso de Responsive Design: Maquetación Mobile First</td>

                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>

                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badge-preprocesadores-8c2ed161-d4f1-4d08-bb9e-9e741cdd539d.png" width={26} /></td>

                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>



                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badges-animacion-css-03-4f2cd60d-e10b-4ea3-b5fe-1c3bc38e6970.png" width={26} /></td>
                            <td>Curso de Transformaciones y Transiciones en CSS</td>

                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>



                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badges-animacion-css-02-740b1ebd-dbcf-4cfc-befb-5988cc6b03d0.png" width={26} /></td>
                            <td>Curso de Animaciones con CSS</td>

                            <td>8% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>
                        </tr>
                        <tr>
                            <td><Image src="" width={26} /></td>
                            <td></td>
                            <td>0% |  <a href='' target='_blank'>ver certificado</a></td>
                        </tr>
                        <tr>
                            <td><Image src="" width={26} /></td>
                            <td></td>
                            <td>0% |  <a href='' target='_blank'>ver certificado</a></td>
                        </tr>
                        <tr>
                            <td><Image src="" width={26} /></td>
                            <td></td>
                            <td>0% |  <a href='' target='_blank'>ver certificado</a></td>
                        </tr>
                        <tr>
                            <td><Image src="" width={26} /></td>
                            <td></td>
                            <td>0% |  <a href='' target='_blank'>ver certificado</a></td>
                        </tr>
                        <tr>
                            <td><Image src="" width={26} /></td>
                            <td></td>
                            <td>0% |  <a href='' target='_blank'>ver certificado</a></td>
                        </tr>



                        {/* <tr>
                            <td><Image src="" width={26} /></td>
                            <td></td>

                            <td>0% |  <a href='hhh' target='_blank'>ver certificado</a></td>


                        </tr> */}

                    </tbody>
                </table>
            </div>


        </React.Fragment>
    );

}

export { HTMLCSSRoute };