import React from 'react';
import { Image } from 'semantic-ui-react';

function CourseSection8 (props) {
    return (
        <React.Fragment>

        <div className="container mt-3">
                <figure className='row'>
                    <Image className="col-sm-1" alt='' src={props.src} heihgt={`${props.dimension}px`} width={`${props.dimension}px`} />
                     <h5 className="col-sm-11" style={{ lineHeight : "inherit"}}>{props.course}</h5>
                </figure>
                
                <div className="progress">
                    <div className="progress-bar fondogradiente" style={{ width: props.porcent }}>{props.porcent}</div>
                </div>
            </div>
            <br />
            </React.Fragment>

    );

}

export {CourseSection8};