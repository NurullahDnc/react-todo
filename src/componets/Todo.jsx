import React from 'react'

export default function Todo({text, key}) {


 

    return (

        // . Todoları burda tanımladık, todoList'de toplayacaz
        <div className="todo">
            <button className="complete-btn">
                <i className="fas fa-check-circle"></i>
            </button>
        
            <li className="todo-item">{text} </li>

            <button  className="trash-btn">
                <i className="fa fa-minus-circle"></i>
            </button>

        </div>

    )
}
