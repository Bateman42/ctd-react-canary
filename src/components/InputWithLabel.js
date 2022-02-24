import React from 'react';
import PropTypes from "prop-types";


function InputWithLabel({children,todoTitle, handleTitleChange }){
    const inputRef = React.useRef(null);
    React.useEffect(() => {
        inputRef.current.focus();
    }) 

    InputWithLabel.propTypes = {
		todoTitle: PropTypes.string,
		handleTitleChange: PropTypes.func,
		children: PropTypes.element,
	};
    
    return(
        <>
            <label htmlFor="todoTitle">{children}</label>
            <input 
                type="text" 
                id="todoTitle" 
                name="title" 
                value={todoTitle} 
                onChange={handleTitleChange} 
                ref={inputRef}
            />
        </>
    )};

export default InputWithLabel;