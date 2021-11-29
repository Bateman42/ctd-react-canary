import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App() {
  //const [todoList, setTodoList] = React.useState([]);

  //const [setNewTodo] = React.useState('');
  //const [newTodo, setNewTodo] = React.useState('');
  //const [addTodo,newTodo ] = React.useState('');

  const [todoList, setTodoList] = React.useState(
		JSON.parse(localStorage.getItem("savedTodoList"))
	);

  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  function addTodo(newTodo){
    setTodoList([...todoList, newTodo]);
    return(<div></div>);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList}/>
    </div>
    // <p>{newTodo.title}</p>
  );
}
 
export default App;