import React from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm({onAddTodo}){

    const [todoTitle, setTodoTitle] = React.useState('');
    
    function handleTitleChange(event){
        event.preventDefault();
        setTodoTitle(event.target.value);
        console.log(todoTitle);
    };

    const handleAddTodo = (event) => {
        console.log(event);
        event.preventDefault();
       // const todoTitle = event.target.title.value;
        onAddTodo({title: todoTitle, id: Date.now()});
        //document.querySelector('form').reset();
        setTodoTitle('');
    };

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel todoTitle={todoTitle} 
            handleTitleChange={handleTitleChange} label="Title"/>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm; 