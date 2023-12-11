import React from 'react'

function Form({inputText, setInputText}) {

    const submitTodoHandle = (e)=>{
        e.preventDefault()
    }

    // inputtun value alındı, app.js tanımlanan state'ye gonderildi,  degerleri input icerisindeki value'e de tutuyoruz
    const inputTextHandle = (e)=>{
        setInputText(e.target.value)
        console.log(inputText)
    }

    return (
        <div>

            <form>
                <div className="search">
                    <input value={inputText} onChange={inputTextHandle} type="text" className="todo-input" placeholder="Add..." />
                    <button onClick={submitTodoHandle} className="todo-button" type="submit">
                        <i className="fas fa-plus-circle"></i>
                    </button>
                </div>

                <div className="select">
                        <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
                
            </form>

        </div>
    )
}

export default Form
