import React from 'react';
import ReactDOM from 'react-dom/client';

function Modal({ children }) {
    return ReactDOM.createPortal(
        children,
        document.getElementById('modal')
    );
}

export { Modal };