import React from 'react'

function Form() {
    return (
        <div>

            <form>
                <div class="search">
                    <input type="text" class="todo-input" placeholder="Add..." />
                    <button class="todo-button" type="submit">
                        <i class="fas fa-plus-circle"></i>
                    </button>
                </div>

                <div class="select">
                        <select name="todos" class="filter-todo">
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
