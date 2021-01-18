import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxilary';

const withErrorHandler = (WrappedComponent) => {
    return (props) => {
        return(
            <Aux>
                <Modal>
                    Something is broken!
                </Modal>
                <WrappedComponent {...props}/>
            </Aux>
            
        );
    }
}

export default withErrorHandler;