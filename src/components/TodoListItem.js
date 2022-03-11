// Import React from "react" npm package
import React from 'react';
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

const TodoListItem = ({id, title, onRemoveTodo}) => {
    const headleRemoveTodo = (e) => {
        onRemoveTodo(id);
    };

    TodoListItem.propTypes = {
		item: PropTypes.string,
		onRemoveTodo: PropTypes.func,
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

