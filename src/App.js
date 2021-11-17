import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App() {
  const [todoList, setTodoList] = React.useState([]);

  const [newTodo, setNewTodo] = React.useState('');
  //const [addTodo,newTodo ] = React.useState('');

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <TodoList todoList={todoList}/>
      <p>{newTodo.title}</p>
    </div>
  );
}
 
export default App;