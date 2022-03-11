import { React } from 'react';
import InputWithLabel from './InputWithLabel.js';
import Airtable from 'airtable';

var base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

const AddTodoForm = ({ handleAddTodo, handleTitleChange, todoTitle }) => {
  
  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel handleTitleChange={handleTitleChange} todoTitle={todoTitle}>Title</InputWithLabel>
      <button>Add</button>
    </form>
  )
}

export default AddTodoForm;






















// import React from 'react';
// import InputWithLabel from './InputWithLabel';
// import PropTypes from "prop-types";



// function AddTodoForm({onAddTodo}){
//     const [todoTitle, setTodoTitle] = React.useState('');

//     AddTodoForm.propTypes = {
// 		onAddTodo: PropTypes.func,
// 	};

//     const handleTitleChange = (e) => {
//         const newTodoTitle = e.target.value;
//         setTodoTitle(newTodoTitle);
//     };

//     const handleAddTodo = (e) => {
//         e.preventDefault();
//         onAddTodo({
//             fields: {Title: todoTitle},
//             id: Date.now()
//         });
//         setTodoTitle('');
//     };

//     return (
//         <form onSubmit={handleAddTodo}>
//             <InputWithLabel todoTitle={todoTitle} 
//             isFocused handleTitleChange={handleTitleChange}>
//                 Title
//             </InputWithLabel>
//             <button>Add</button>
//         </form>
//     );
// }

// export default AddTodoForm; 