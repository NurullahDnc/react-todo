import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, setTodos}) {

    // const texts = todos.map(item => item)

    return (

        // . Todoları kapsiyor, buraya cekicez
        <div className="todo-container">
        <ul className="todo-list">
            {todos.map((todo) => (
                <Todo
                    text={todo.text}
                    key={todo.id}

                   
                />
            ))}
        
        
        </ul>
        </div>
    )
}

 