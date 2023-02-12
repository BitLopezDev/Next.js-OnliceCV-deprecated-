import React from 'react';
import { Image, Item } from 'semantic-ui-react'
import { DiplomaModal } from '../../../DiplomaModal';

const HeadRoute = ({ ...props }) => {



    var table = [];
    props.coursesArray.forEach(course => {
        let name = course[0];
        let image = course[1];
        let certification = course[2];
        let completion = course[3];

        table.push(<tr> <td><Image src={image} width={26} /></td><td>{name}</td> <td>{completion} |  <a href={certification} target='_blank'>ver certificado</a></td></tr>);
        // console.log(course[0] + course[1] + course[2]);



    });

    console.log(table);
    /* <tr> <td><Image src=${course[1]} width={26} /></td><td>course[0]</td> <td>${course[3]} |  <a href='${course[2]}' target='_blank'>ver certificado</a></td></tr> */

    return (
        <React.Fragment>

            <Item.Group>
                <Item>
                    <Item.Image size='tiny'  >
                        {/* <FullStackModal /> */}
                        {/* https://react.semantic-ui.com/images/wireframe/image.png */}
                        {/* ./../../../../public/assets/users/Santiago/credenciales/Platzi/FullStackJS.png */}
                        <DiplomaModal which={props.which} />
                        <h6><a href={props.diplomaurl} target='_blank'>Ver certificado</a></h6>
                    </Item.Image>

                    <Item.Content>
                        <Item.Header as='a'>{props.route} | {props.year}</Item.Header>
                        <Item.Meta> <div className="progress">
                            <div className="progress-bar fondogradiente" style={{ width: props.completion + '%' }}>{props.completion}%</div>
                        </div></Item.Meta>
                        <Item.Description>
                            <p>{props.description}</p>
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

                        {table}
                        {/* <tr>
                            <td><Image src="" width={26} /></td>
                            <td></td>

                            <td>0% |  <a href='hhh' target='_blank'>ver certificado</a></td>


                        </tr> */}

                    </tbody>
                </table>
            </div>
            {/* <tr>
                            <td><Image src="" width={26} /></td>
                            <td></td>

                            <td>0% |  <a href='hhh' target='_blank'>ver certificado</a></td>


                        </tr> */}








        </React.Fragment>
    );

}

export { HeadRoute };