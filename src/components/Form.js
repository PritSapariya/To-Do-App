import React from 'react'

const Form = ({ inputText, todos, setInputText, setTodos, setStatus}) => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText('');
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <form>
        <input type="text" className="todo-input" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
        <button className="todo-button" type="submit" onClick={onSubmitHandler}>
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        </form>
    );
};

export default Form