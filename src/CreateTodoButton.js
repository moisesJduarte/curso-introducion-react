import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton (props) {
    
    const onClickButton = (msg) => {
        alert('aqui se hace un click')
    }

    return (


        <button 
        className="CreateTodoButton"
        onClick={onClickButton}

        >
            +
        </button>
        
    );
}
export { CreateTodoButton }; 