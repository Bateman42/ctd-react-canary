import { React, useState, useEffect } from 'react';
import TodoList from './components/TodoList.js';
import AddTodoForm from './components/AddTodoForm.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './components/TodoListItem.module.css';
import Airtable from 'airtable';
import  "./App.css";

var base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE_ID);


function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  useEffect(() => {
    fetchTodo();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const fetchTodo = () => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?sort%5B0%5D%5Bfield%5D=Created&sort%5B0%5D%5Bdirection%5D=asc`, { headers: { Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}` } })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      setTodoList(data.records);
      setIsLoading(false);
    })
  }

  const handleAddTodo = async (event) => {
    event.preventDefault();
    await base('Default').create([
      {
        "fields": {
          "Title": todoTitle
        }
      }
    ], function(err, records) {
      if (err) {
        console.log(err);
      }
      fetchTodo();
    });
    setTodoTitle('');
  }

  const removeTodo = (id) => {
    base('Default').destroy([id], function(err, deletedRecords) {
      if (err) {
        console.error(err);
        return;
      }
      fetchTodo();
    });

  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <div class="center">
            <h1>ToDo List</h1>
            <AddTodoForm handleTitleChange={handleTitleChange} todoTitle={todoTitle} handleAddTodo={handleAddTodo} />
            {
              isLoading ?
                <p>Loading...</p> :
                <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
            }
          </div>
        } />

        <Route exact path="/new" element={
          <h1>New Todo List</h1>
        } />

      </Routes>
    </BrowserRouter>

  );
}

export default App;