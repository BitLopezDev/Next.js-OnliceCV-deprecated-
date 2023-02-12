import React from 'react';
import { Image, Item } from 'semantic-ui-react'
import { DiplomaModal } from './../../../DiplomaModal';

const HeadRoute = ({ ...props }) => {

    let lady = {
        "Lady": "Negra",

    };
    return (
        <React.Fragment>

            <Item.Group>
                <Item>
                    <Item.Image size='tiny'  >
                        {/* <FullStackModal /> */}
                        {/* https://react.semantic-ui.com/images/wireframe/image.png */}
                        <DiplomaModal which={'fullstackJS'} />
                        <h6><a href='https://platzi.com/p/santiagocomesana03/ruta/100-javascript-full-stack/diploma/detalle/' target='_blank'>Ver certificado</a></h6>
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









        </React.Fragment>
    );

}

export { HeadRoute };