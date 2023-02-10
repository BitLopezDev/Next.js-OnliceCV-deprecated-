import React from 'react';
import { Image, Item } from 'semantic-ui-react'
//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FullStackModal } from '../Modals/FullStackModal';
const BackEndPHP = () => {
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
                        <Item.Header as='a'>Backend con PHP | 2023</Item.Header>
                        <Item.Meta> <div className="progress">
                            <div className="progress-bar fondogradiente" style={{ width: '20%' }}>20%</div>
                        </div></Item.Meta>
                        <Item.Description>
                            <p>En este curso refresco y profundizo mis conocimientos en PHP, PHP OOP, manejo de sesiones, cookies, conexiones a bases de datos.
                                También incorporo a mis habilidades el Manejo de Laravel, Symfony, Inertia y Vue.js para Single Page Applications</p>
                        </Item.Description>
                        {/* <Item.Extra>Additional Details</Item.Extra> */}
                    </Item.Content>
                </Item>
            </Item.Group>



            <div style={{ 'overflow': 'scroll', maxHeight: 170 }}>

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
                            <td><Image src="https://static.platzi.com/media/achievements/badge-practico-php-5960cc98-6fc0-4d7d-ae65-6ef508abf1f3.png" width={26} /></td>
                            <td>Curso Práctico de PHP</td>

                            <td>100% |    <a href='https://platzi.com/p/santiagocomesana03/curso/2516-course/diploma/detalle/' target='_blank'>ver certificado</a></td>


                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badge-intro-php-platzi-3508edb9-2e55-42d9-bbcc-e68bb9f8b78d.png" width={26} /></td>
                            <td>Curso de PHP con Composer</td>

                            <td>100% |    <a href='https://platzi.com/p/santiagocomesana03/curso/2024-course/diploma/detalle/' target='_blank'>ver certificado</a></td>

                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badge-manejodatos-php-f69add33-4465-4457-a81f-5e8dcbe3794c.png" width={26} /></td>
                            <td>Curso de Manejo de Datos en PHP</td>
                            <td>100% |    <a href='https://platzi.com/p/santiagocomesana03/curso/2032-course/diploma/detalle/' target='_blank'>ver certificado</a></td>



                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badges-poo-513deb20-a5bd-40a7-b97a-c36dc772d512.png" width={26} /></td>
                            <td>Curso de Programación Orientada a Objetos: POO</td>

                            <td>100% |   <a href='' target='_blank'>ver certificado</a></td>



                        </tr>

                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badge-intermediophp-cookies-da5e3c79-4ef9-4198-9244-ba2d88c039c1.png" width={26} /></td>
                            <td>Curso Intermedio de PHP: Cookies, Sesiones y Modularización</td>

                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>


                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badge-intermediophp-entornos-1-6047122d-b680-45f9-8fea-a776d79fb41a.png" width={26} /></td>
                            <td>Curso Intermedio de PHP: Entornos Virtuales y Funciones Avanzadas</td>

                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>


                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badges-php-avanzado-798212d8-15fb-44bf-850d-68645aa7f2e7.png" width={26} /></td>
                            <td>Curso Avanzado de PHP</td>

                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>
                        </tr>


                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/piezas-fundamentos-symfony_badge-016a640d-8ee0-464c-b374-1ef8bf60109a.png" width={26} /></td>
                            <td>Curso de Bases de Datos en Symfony</td>

                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>


                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badge-single-page-apps-laravel-inertia-vue-2dd8b816-553d-44d8-8795-55841dc539e8.png" width={26} /></td>
                            <td>Curso de Single Page Applications en Laravel con Inertia y Vue.js</td>

                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>


                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badge-api-rest-laravel-b7b91364-00ac-4f2b-8b2a-e30a95211d4b.png" width={26} /></td>
                            <td>Curso de API REST con Laravel</td>

                            <td>0% |  {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>


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

export { BackEndPHP };