import React from 'react'; 
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);

  React.useEffect(() =>{
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, 
    {headers:{ Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}})
    .then((response) => response.json())
    .then((result) => 
    {
      setIsloading(false);
      setTodoList(result.records);
    }
  )});

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
    <BrowserRouter>
      <Routes>
      <Route path = "/" element={
        <>
        <h1>Todo List</h1>
          <AddTodoForm onAddTodo={addTodo}/>
          { isLoading ? (
          <p>Loading...</p>
          ) : (
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        )}
        </>
      }/>

      <Route path = "/new" element={
        <h3>New Todo List</h3>
      }/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;