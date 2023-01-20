import React from 'react';
import { Image, Item } from 'semantic-ui-react'
//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FullStackModal } from './../Modals/FullStackModal';
const FullStackRoute = () => {
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
                        <Item.Header as='a'>Full Stack Developer con JavaScript | 2023</Item.Header>
                        <Item.Meta> <div className="progress">
                            <div className="progress-bar fondogradiente" style={{ width: '66%' }}>66%</div>
                        </div></Item.Meta>
                        <Item.Description>
                            <p>En este curso Profundicé en mis conocimientos como desarrollador web conociendo Node, Webpack, Next.js, refrescando el conocimiento en bases de datos, y entrando más a profundidad en el asíncronismo y las nuevas funcionalidad de JavaScript.</p>
                        </Item.Description>
                        {/* <Item.Extra>Additional Details</Item.Extra> */}
                    </Item.Content>
                </Item>
            </Item.Group>
            <div style={{ 'overflow': 'scroll', maxHeight: 170 }}>
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
                            <td><Image src="https://static.platzi.com/media/achievements/badge-terminal-5c5518b5-43d0-4387-b39e-3d85db446c5f.png" width={26} /></td>
                            <td>Terminal de Linux</td>
                            <td>100% |  <a href='https://platzi.com/p/santiagocomesana03/curso/2292-terminal/diploma/detalle/' target='_blank'>ver certificado</a></td>
                        </tr>
                        <tr>
                            <td><Image src='https://static.platzi.com/media/achievements/badge-github-0b729570-934d-47d8-ba6b-610d7f15e0ec.png' width={26} /></td>
                            <td>Curso profesional de Git y GitHub</td>
                            <td>100% | <a href='https://platzi.com/p/santiagocomesana03/curso/1557-git-github/diploma/detalle/' target='_blank'>ver certificado</a></td>
                        </tr>

                        <tr>
                            <td><Image src='https://static.platzi.com/media/achievements/badge-asincro-js-9f17b092-47d0-4c8a-a59d-67714aa18db3.png' width={26} /></td>
                            <td>Asincronismo con JavaScript </td>
                            <td>100% | <a href='https://platzi.com/p/santiagocomesana03/curso/3175-asincronismo-js/diploma/detalle/' target='_blank'>ver certificado</a></td>
                        </tr>
                        <tr>
                            <td><Image src='https://static.platzi.com/media/achievements/badge-webpack-3e3867f2-5bcf-4a7e-9af2-cf735850a791.png' width={26} /></td>
                            <td>Curso de Webpack</td>
                            <td>100% | <a href='https://platzi.com/p/santiagocomesana03/curso/2242-webpack/diploma/detalle/' target='_blank'>ver certificado</a></td>
                        </tr>
                        <tr>
                            <td><Image src='https://static.platzi.com/media/achievements/piezas-reactjs-badge-1-52e950ac-c75c-40f5-94e0-8b6cab392ed2.png' width={26} /></td>
                            <td>Curso práctico de React.js</td>
                            <td>100% | <a href='https://platzi.com/p/santiagocomesana03/curso/2484-react-practico/diploma/detalle/' target='_blank'>ver certificado</a></td>
                        </tr>
                        <tr>
                            <td><Image src='https://static.platzi.com/media/achievements/piezas-profesional-nextjs_badge-c9a806c6-e240-45da-81da-c206b0611e84.png' width={26} /></td>
                            <td>Curso Profesional de Next.js</td>
                            <td>0% | {/*  <a href='' target='_blank'>ver certificado</a>*/}</td>
                        </tr>
                        <tr>
                            <td><Image src='https://static.platzi.com/media/achievements/badge-fundamentos-de-bases-de-datos-cc5eff2a-a7e0-4110-af5d-a47b628611da.png' width={26} /></td>
                            <td>Curso de fundamentos de bases de datos</td>
                            <td>100% | <a href='https://platzi.com/p/santiagocomesana03/curso/1566-bd/diploma/detalle/' target='_blank'>ver certificado</a></td>
                        </tr>
                        <tr>
                            <td><Image src='https://static.platzi.com/media/achievements/badge-backend-nodejs-apirest-expressjs-3fc7bca3-8dcb-459c-9638-12c92d502f5f.png' width={26} /></td>
                            <td>BackEnd con Node.js : API REST con Express.js</td>
                            <td>100% | <a href='https://platzi.com/p/santiagocomesana03/curso/2485-backend-nodejs/diploma/detalle/' target='_blank'>ver certificado</a></td>
                        </tr>
                        <tr>
                            <td><Image src='https://static.platzi.com/media/achievements/backend-node-82a9a4bf-7ce4-4437-86f6-c39dcce17d15.png' width={26} /></td>
                            <td>Backend con Node.js: Base de Datos con PostgreSQL </td>
                            <td>100% | <a href='https://platzi.com/p/santiagocomesana03/curso/2507-backend-nodejs-postgres/diploma/detalle/' target='_blank'>ver certificado</a></td>
                        </tr>
                        <tr>
                            <td><Image src='https://static.platzi.com/media/achievements/badge-backend-nodejs-autenticacion-passportjs-jwt-3425c859-2f69-49a5-849a-792049d24.png' width={26} /></td>
                            <td>Backend con Node.js: Autenticación con Passport.js y JWT</td>
                            <td>100% | <a href='https://platzi.com/p/santiagocomesana03/curso/2489-passport/diploma/detalle/' target='_blank'>ver certificado</a></td>
                        </tr>

                    </tbody>
                </table>
            </div>


        </React.Fragment>
    );

}

export { FullStackRoute };