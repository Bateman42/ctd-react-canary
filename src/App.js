import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function useSemiPersistentState() {

  const [todoList, setTodoList] = React.useState(
		JSON.parse(localStorage.getItem("savedTodoList"))
	);

  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  
  function addTodo(newTodo) {
		setTodoList([...todoList, newTodo]);
	}

  function removeTodo(id) {
    let newTodoList = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(newTodoList);
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}
 
export default App;