import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const TodoList = ({ todos }) => {
    const [title, setTitle] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        if (title.trim() === "") return;
        Inertia.post("/todos", { title });
        setTitle("");
    };

    const toggleTodo = (id) => {
        Inertia.patch(`/todos/${id}`);
    };

    const deleteTodo = (id) => {
        Inertia.delete(`/todos/${id}`);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            
            {/* Form */}
            <form onSubmit={addTodo} className="mb-4">
                <input
                    type="text"
                    className="border p-2 mr-2"
                    placeholder="Add new todo"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 text-white p-2">
                    Add
                </button>
            </form>

            {/* Todo List */}
            <ul className="list-disc pl-6">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center justify-between mb-2">
                        <span
                            className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
                            onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.title}
                        </span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="bg-red-500 text-white p-1 ml-4"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
