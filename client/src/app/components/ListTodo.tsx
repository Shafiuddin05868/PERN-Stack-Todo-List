"use client"
import React, { useEffect, useState } from 'react'
import EditTodo from './EditTodo';

interface ListTodoProps {
    render: boolean;
    onTodo: () => void; // Function type with no arguments and no return value
  }
  
  const ListTodo: React.FC<ListTodoProps> = ({ render, onTodo })=> {

    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error(err.message); // Access the error message safely
            } else {
                console.error("An unknown error occurred");
            }
        }
    }
    const deleteTodo = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE",
            })
            setTodos(todos.filter((todo: { todo_id: number }) => todo.todo_id !== id));
            console.log(response);
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error(err.message);
            } else {
                console.error("Some error with the error");
            }
        }
    }

    useEffect(() => {
        getTodos();
    }, [render]);

    return (

        <table className="w-full max-w-4xl mx-auto mt-5 border-collapse border border-gray-300 rounded-lg shadow-lg">
            <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                    <th className="px-6 py-3 text-left font-semibold">Description</th>
                    <th className="px-6 py-3 text-left font-semibold">Edit</th>
                    <th className="px-6 py-3 text-left font-semibold">Delete</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo: { todo_id: number; description: string }, index: number) => (
                    <tr
                        key={todo.todo_id}
                        className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} 
                            hover:bg-indigo-100 transition duration-300`}
                    >
                        <td className="px-6 py-4 border-b border-gray-300">{todo.description}</td>
                        <td className="px-6 py-4 border-b border-gray-300">

                            <EditTodo onTodo={onTodo} id={todo.todo_id} description={todo.description} />
                        </td>
                        <td className="px-6 py-4 border-b border-gray-300">
                            <button
                                onClick={() => deleteTodo(todo.todo_id)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-transform transform hover:scale-105"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    )
}

export default ListTodo