import React, { useState } from 'react';

const TodoList = () => {
    const [inputTask, setInputTask] = useState('');
    const [list, setList] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false); // New state for input validation

    const handleAddTodo = () => {
        if (inputTask.trim() === '') {
            setIsEmpty(true); // Set isEmpty state to true if input is empty
            return; // Don't add an empty task
        }

        const newTask = {
            id: Math.random(),
            todo: inputTask
        };

        setList([...list, newTask]);
        setInputTask('');
        setIsEmpty(false); // Reset isEmpty state after adding a task
    };

    const handleDeleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    };

    const handleInputChange = (event) => {
        setInputTask(event.target.value);
        setIsEmpty(false); // Reset isEmpty state when input changes
    };

    return (
        <div className="Todo">
            <h1>To-Do App</h1>

            <div className="Top">
                <input
                    className={`input ${isEmpty ? 'empty' : ''}`} // Apply 'empty' class if isEmpty is true
                    type="text"
                    value={inputTask}
                    onChange={handleInputChange}
                    placeholder="Enter a task"
                />

                <button className="btn" onClick={handleAddTodo}>➕</button>
            </div>

            <ul>
                {list.map((todo) => (
                    <li className="task" key={todo.id}>
                        {todo.todo}
                        <button onClick={() => handleDeleteTodo(todo.id)}>
                            ✖
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
