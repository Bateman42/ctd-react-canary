// Import React from "react" npm package
import * as React from 'react';

//Declare a function named TodoListItem

const TodoListItem = (props) => {
    return <li> {props.todo} </li>;
};

/// Export TodoListItem function as default module
export default TodoListItem; 

