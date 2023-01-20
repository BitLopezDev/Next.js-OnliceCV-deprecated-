import React from 'react';
import { Image, Item } from 'semantic-ui-react'
//import './../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FullStackModal } from '../Modals/FullStackModal';
const FullStackNextRoute = () => {
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
                            <div className="progress-bar fondogradiente" style={{ width: '100%' }}>100%</div>
                        </div></Item.Meta>
                        <Item.Description>
                            <p>En este curso profundizo mis conocimientos en Next.js gracias a herramientas como GraphQL, aprendo optimización y deploy a producción, manejo de grandes Datasets, y mucho más.</p>
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
                            <td><Image src="https://static.platzi.com/media/achievements/piezas-nextjs-graphql_badge-cbeed361-b95b-439e-a48b-ce024f85384e.png" width={26} /></td>
                            <td>Curso de Next.js con GraphQL</td>
                            <td>0% |  <a href='' target='_blank'>ver certificado</a></td>
                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badge-practico-next-js--cb0ccb8f-efa3-40a8-b91f-8cf5a4d51eeb.png" width={26} /></td>
                            <td>Curso práctico de Next.js</td>
                            <td>100% |  <a href='https://platzi.com/p/santiagocomesana03/curso/2690-nextjs-practico/diploma/detalle/' target='_blank'>ver certificado</a></td>
                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badge-next-js-seguridad-con-owasp-9c9469e2-d9c9-4022-9149-8833588fb8f5.png" width={26} /></td>
                            <td>Next.js: Seguridad Web con OWASP</td>
                            <td>0% |  <a href='' target='_blank'>ver certificado</a></td>
                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/next-defe9ba8-b678-4934-a898-7be2188cdbac.png" width={26} /></td>
                            <td>Next.js: Optimización y Manejo de Grandes Datasets</td>
                            <td>0% |  <a href='' target='_blank'>ver certificado</a></td>
                        </tr>
                        <tr>
                            <td><Image src="https://static.platzi.com/media/achievements/badge-nextjs-internacionalizacion-de6e10b1-0a08-4d47-98eb-54e4177f4925.png" width={26} /></td>
                            <td>Curso de Next.js: Internacionalización de Aplicaciones Web con i18n</td>
                            <td>0% |  <a href='' target='_blank'>ver certificado</a></td>
                        </tr>


                        {/* <tr>
                            <td><Image src="" width={26} /></td>
                            <td></td>
                            <td>0% |  <a href='' target='_blank'>ver certificado</a></td>
                        </tr> */}

                    </tbody>
                </table>
            </div>


        </React.Fragment>
    );

}

export { FullStackNextRoute };