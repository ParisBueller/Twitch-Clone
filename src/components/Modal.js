import React from 'react';
//must import ReactDOM when rendering a portal
import ReactDOM from 'react-dom';

const Modal = props => {
    //React portals take two arguments, 1: the jsx to be returned,
    //2: a reference to the element we want this portal rendered into
    return ReactDOM.createPortal(
       <div onClick={props.onDismiss}className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()}className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
       </div>,
        document.querySelector('#modal')
    );
};

export default Modal;