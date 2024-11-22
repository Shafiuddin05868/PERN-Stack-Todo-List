import React, { useState } from 'react'


function EditTodo({ onTodo, id, description }: { onTodo: () => void; id: number; description: string }) {

    const [Description, setDescription] = useState(description);
    const updateDescription = async (
        e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLInputElement>
    ) => {
        e.preventDefault();
        try {
            const body = { Description };
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(body)
            })
            onTodo();
            handleVisible();
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.log(err.message);
            } else {
                console.error("problem with error");
            }
        }
    };

    const [visible, setVisible] = useState(false);
    const handleVisible = () => setVisible(!visible);

    return (
        <div className="relative">
            <button
                onClick={() => handleVisible()}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-105"
            >
                Edit
            </button>

            {visible && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                >
                    <div
                        className="bg-white rounded-lg shadow-lg border border-gray-200 w-96 max-w-md p-6 
                  transition-transform transform scale-95 sm:scale-100"
                    >
                        {/* Input Field */}
                        <input
                            type="text"
                            className="w-full h-3/5 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-4"
                            value={Description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                                // console.log(Description)
                            }}

                            placeholder="Enter new description"
                        />

                        {/* Buttons */}
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => {
                                    handleVisible();
                                    setDescription(description)}}
                                className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => updateDescription(e)}
                                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>


    )
}

export default EditTodo