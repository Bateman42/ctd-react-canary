// Import React from "react" npm package
import React from 'react';

//Declare a function named TodoListItem

let TodoListItem = ({todo}) => {
    return (
    <li> {todo.title} </li>
    );
};

/// Export TodoListItem function as default module
export default TodoListItem; 

