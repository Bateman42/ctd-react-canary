// Import React from "react" npm package
import * as React from 'react';
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
      id: 3,
      title: 'Repeat',
    },
  
];


//Declare a function named TodoList
function TodoList() {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} todo={item.title} />
      ))}
    </ul>
  );
}

//Export TodoList function as default module
export default TodoList;
