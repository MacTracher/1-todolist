import React from 'react';
import './App.css';
import TodoList from "./TodoList";

function App() {
    const todoListTitle_1 = 'What to learn'

    const task_1 = [
        { id: 1, isDone: true, title: 'HTML&CSS' },
        { id: 2, isDone: false, title: 'JS' },
        { id: 3, isDone: true, title: 'React' },

    ]
    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={task_1} />

        </div>
    );
}

export default App;

