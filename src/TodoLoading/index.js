import React from "react";
import './TodoLoading.css';

function TodoLoading( { error }) {
    return( 
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
         <p className="LoadingTodo-text">Estamos cargando, no deseperes</p>;
        <span className="LoadingTodo-deleteIcon"></span>
        </div>
    );
}

export { TodoLoading };