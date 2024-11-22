"use client"
import React, {useState} from 'react'
import InputTodu from './InputTodu'
import ListTodo from './ListTodo'

function CRUD() {
    const [render, setrender] = useState(false);
    return (
        <div>
            <InputTodu onTodo={() => setrender(!render)} />
            <ListTodo render={render} onTodo={() => setrender(!render)}/>
        </div>
    )
}

export default CRUD