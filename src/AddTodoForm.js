import React from 'react';

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
            <label htmlFor="todoTitle">Title </label>
            <input type="text" id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange} />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm; 