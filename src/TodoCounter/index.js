import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {

    return (
        <h2 className="TodoCounter"> To do {completed} {total} List.</h2>
    );
}

export { TodoCounter };