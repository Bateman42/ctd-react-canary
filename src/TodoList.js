// Import React from "react" npm package
import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
    {
      id: 1,
      title: 'Complete assignment',
    },
    {
      id: 2,
      title: 'Eat',
    },
    {
      id: 3,
      title: 'Sleep',
    },
    {
      id: 4,
      title: 'Repeat',
    },
  
];


//Declare a function named TodoList
function TodoList() {
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
