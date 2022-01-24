// Import React from "react" npm package
import React from 'react';

//Declare a function named TodoListItem

let TodoListItem = ({todo, onRemoveTodo}) => {
    return (
    <li> 
        {todo.title}
        <button type="button" onClick={ () => {
            onRemoveTodo(todo.id)
        }}>Remove</button>
    </li>
    );
};

/// Export TodoListItem function as default module
export default TodoListItem; 

