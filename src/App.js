import React, { useState } from 'react';

const TodoList = () => {
    const [inputTask, setInputTask] = useState('');
    const [list, setList] = useState([]);
    const [inputError, setInputError] = useState(false);

    const handleAddTodo = () => {
        if (inputTask.trim() === '') {
            setInputError(true);
            return;
        }

        const newTask = {
            id: Math.random(),
            todo: inputTask,
            completed: false, // Initialize as not completed
        };

        setList([...list, newTask]);
        setInputTask('');
        setInputError(false); // Reset the input error state
    };

    const handleDeleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    };

    const handleCompleteTodo = (id) => {
        const updatedList = list.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed, // Toggle the completed status
                };
            }
            return todo;
        });
        setList(updatedList);
    };

    const handleInputChange = (event) => {
        setInputTask(event.target.value);
        setInputError(false); // Reset the input error state when typing
    };

    return (
        <div className="Todo">
            <h1>To-Do App</h1>

            <div className="Top">
                <input
                    className={`input ${inputError ? 'error' : ''}`}
                    type="text"
                    value={inputTask}
                    onChange={handleInputChange}
                    placeholder="Enter a task"
                />

                <button className="btn" onClick={handleAddTodo}>Add</button>
            </div>

            {inputError && <p className="error-text">Please enter a task.</p>}

            <ul>
                {list.map((todo) => (
                    <li className={`task ${todo.completed ? 'completed' : ''}`} key={todo.id}>
                        {todo.todo}
                        <button onClick={() => handleDeleteTodo(todo.id)}>Remove</button>
                        <button onClick={() => handleCompleteTodo(todo.id)}>
                            {todo.completed ? 'Undo' : 'Done'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
