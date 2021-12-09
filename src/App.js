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

function App() {
  return (
    <div>
      <h1>Todo List</h1>

      <hr />
 
      <ul>
        {todoList.map(function (item) {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
 
export default App;