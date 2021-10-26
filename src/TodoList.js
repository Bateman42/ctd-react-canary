// Import React from "react" npm package
import * as React from 'react';


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
let TodoList = () => (
    <ul>
        {todoList.map(function (item) {
          return <li key={item.id}>{item.title}</li>;
        })}
    </ul>
);

//Export TodoList function as default module
export default TodoList; 