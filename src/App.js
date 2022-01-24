import React from 'react'; //creates a JavaScript object. This object contains properties that are needed to make React work, such as React.createElement() and React.Component.
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

/* function useSemiPersistentState() {

  const [todoList, setTodoList] = React.useState(  //when we call todoList and setTodo it will triggered useState method
		JSON.parse(localStorage.getItem("savedTodoList"))
	);

  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
} */

function App() {

  const [isLoading, setIsLoading] = React.useState(true);
  //const [todoList, setTodoList] = useSemiPersistentState();

  const [todoList, setTodoList] = React.useState(  //when we call todoList and setTodo it will triggered useState method
		JSON.parse(localStorage.getItem("savedTodoList"))
	);

  React.useEffect(() => {
    new Promise((resolve) =>
      setTimeout(
        () => resolve({ data: { todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [] } }),
        2000
      )
    ).then( result => {
      setTodoList([...result.data.todoList]);
      setIsLoading(false);
    })
  })

  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);
  
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
      { isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
      </>
  );
}
 
export default App;