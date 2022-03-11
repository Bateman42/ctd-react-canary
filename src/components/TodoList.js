// Import React from "react" npm package
import React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from "prop-types";


const TodoList = ({todoList, onRemoveTodo}) => {

  TodoList.propTypes = {
		todoList: PropTypes.array,
		onRemoveTodo: PropTypes.func,
	}; 
  return (
    <div>
      <ul>
        {todoList.map((item) => {
        return <TodoListItem 
          title={item.fields.Title} 
          id={item.id}
          key={item.id} 
          onRemoveTodo={onRemoveTodo} 
          />
        })}
      </ul>
    </div>
  );
}

export default TodoList;
