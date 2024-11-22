"use client"
import React, {useState} from 'react'

function InputTodu({onTodo}: { onTodo: () => void }) {
    const [description, setDescription] = useState<string>("");
    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            const body = {description};
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const response = await fetch("http://localhost:5000/todos",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
           setDescription("");
           onTodo();
        } catch (err) {
            if (err instanceof Error) {
                console.error(err.message); // Access the error message safely
            } else {
                console.error("An unknown error occurred");
            }
        }
    };
  return (
    <div>
        <h1 className="text-center text-4xl font-bold mt-10 text-gray-800 hover:text-blue-500 transition-colors">
    PERN Todo List
</h1>

        <form onSubmit={onSubmitForm} className="w-2/3 mx-auto flex items-center justify-center space-x-2 bg-white p-4 rounded-lg shadow-lg">
    <input 
        className=" flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
        type="text" 
        value={description}
        onChange={e=> setDescription(e.target.value)}
        placeholder="I need to clean my room" 
    />
    <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 shadow-md focus:outline-none"
    >
        Add
    </button>
</form>

    </div>
  )
}

export default InputTodu