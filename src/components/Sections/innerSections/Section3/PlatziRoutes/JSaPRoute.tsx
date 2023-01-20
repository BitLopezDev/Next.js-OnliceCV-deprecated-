import React from 'react';
import { Image, Item } from 'semantic-ui-react'
//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FullStackModal } from '../Modals/FullStackModal';
const JSaPRoute = () => {
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
                        <Item.Header as='a'>JavaScript a Profundidad | 2023</Item.Header>
                        <Item.Meta> <div className="progress">
                            <div className="progress-bar fondogradiente" style={{ width: '14%' }}>14%</div>
                        </div></Item.Meta>
                        <Item.Description>
                            <p>En este curso profundizo mis conocimientos en  JavaScript, POO, Estructura de datos. Aprendo debugging y matemáticas útiles, entre otras cosas.</p>
                        </Item.Description>
                        {/* <Item.Extra>Additional Details</Item.Extra> */}
                    </Item.Content>
                </Item>
            </Item.Group>
            <div style={{ 'overflow': 'scroll', maxHeight: 200 }}>
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
                            <td><Image src="https://static.platzi.com/media/achievements/practico-javascript-matematicas_piezas_badge-06073d4a-f0f1-4ddb-9a2a-eabd9bc2a6fd.png" width={26} /></td>
                            <td>Taller Práctico de JavaScript: Matemáticas y Estadística Básica</td>
                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>
                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/intermedio-programacion-orientada-js-badge-b29243cc-39b1-4f4a-aec0-59f96f0412cd.png" width={26} /></td>
                            <td>Curso Intermedio de Programación Orientada a Objetos en JavaScript</td>
                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>
                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/piezas-arrays-javascript_badge-3af41716-cb1c-4428-b95f-fb791743c826.png" width={26} /></td>
                            <td>Curso de Manipulación de Arrays en JavaScript</td>
                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>
                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badge4x-83ec677a-662f-4f94-a3bd-2ee4b4791179.png" width={26} /></td>
                            <td>Curso de Complejidad Algorítmica con JavaScript</td>
                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>
                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badge-javascript-engine-v8-navegador-de67cba4-0548-4361-9c6a-1a25aa96fa2a.png" width={26} /></td>
                            <td>Curso de JavaScript Engine (V8) y el Navegador</td>
                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>
                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badge-debugging-chrome-devtools-c75256bb-2a2f-4954-b2c0-9c946494ac37.png" width={26} /></td>
                            <td>Curso de Debugging con Chrome DevTools</td>
                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>
                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badge-profesional-javascript-13538df2-24ce-433f-9aa6-e34eed608e70.png" width={26} /></td>
                            <td>Curso Profesional de JavaScript</td>
                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>
                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/curso-profesional-consumo-api-rest-javascript_badge-842a9d5d-8995-48e7-8582-73b1890.png" width={26} /></td>
                            <td>Curso Profesional de Consumo de API REST con JavaScript</td>
                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>
                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badge-estructura-datos-javascript-5c4802d5-4acc-46ca-a8e0-0fa534c607cd.png" width={26} /></td>
                            <td>Curso de Estructuras de Datos con JavaScript</td>
                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>
                        </tr>


                        {/* <tr>
                            <td><Image src="" width={26} /></td>
                            <td></td>
                            <td>0% |   <a href='' target='_blank'>ver certificado</a></td>
                        </tr> */}

                    </tbody>
                </table>
            </div>


        </React.Fragment>
    );

}

export { JSaPRoute };