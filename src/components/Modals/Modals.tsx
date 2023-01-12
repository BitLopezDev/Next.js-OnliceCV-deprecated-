import React from 'react';
import Image from 'next/image';

const Modals = () => {
    return (
        <>
            <div id="modales">
                <div className="modal" id="ElModal">
                    <div className="modal-dialog">
                        <div className="modal-content">


                            <div className="modal-header">
                                <h4 className="modal-title" id="ModalTitle"></h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>


                            <div className="modal-body">

                                <div id="courses">

                                </div>
                                <div id='ActualAlert' className="alert seesconde">
                                    <strong id="ModalStrongAlert"></strong>
                                    <p id="ModalPAlrt"></p>
                                </div>

                            </div>


                            <div className="modal-footer">
                                <button id='cerrarModal' className="btn btn-danger" data-bs-dismiss="modal" type="button"
                                />
                                {/*    */}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Modals;