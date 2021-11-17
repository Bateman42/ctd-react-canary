// Import React from "react" npm package
import React from 'react';
import TodoListItem from './TodoListItem';


//Declare a function named TodoList
function TodoList({todoList}) {

  return (
    <div>
      <ul>
        {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

//Export TodoList function as default module
export default TodoList;
