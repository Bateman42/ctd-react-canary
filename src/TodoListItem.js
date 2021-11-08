// Import React from "react" npm package
import React from 'react';

//Declare a function named TodoListItem

let TodoListItem = (props) => {
    return (
    <li> {props.todo.title} </li>
    );
};

/// Export TodoListItem function as default module
export default TodoListItem; 

