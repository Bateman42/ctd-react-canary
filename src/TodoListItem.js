// Import React from "react" npm package
import React from 'react';
import style from "./TodoListItem.module.css";


const TodoListItem = ({id, title, onRemoveTodo}) => {
    const headleRemoveTodo = (e) => {
        onRemoveTodo(id);
    };
    return (
    <li key="{id}"> 
        {title}
        <button 
        className={style.removeButton}
        onClick={headleRemoveTodo}>Remove</button>
    </li>
    );
};

export default TodoListItem; 

