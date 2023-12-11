import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, setTodos, filteredTodos}) {

    // const texts = todos.map(item => item)

    return (

        // . Todoları kapsiyor, buraya cekicez
        <div className="todo-container">

            <ul className="todo-list">
                {/* her todoyu almak icin map ?,  onceden todos'du simdi filteredTodos select filter isleminden */}
                {filteredTodos.map((todo) => (
                    <Todo
                        text={todo.text}
                        key={todo.id}

                        //. her todonun ıd karsılastırmak icin,  map func. dondugu icin her todonun id'sini alıyor
                        todo={todo}

                        //. todolar burda, todosların id almak icin, todos'dan silicez
                        todos={todos}
                        //. todo guncelleme, todosu silmek icin
                        setTodos={setTodos}
                    />
                ))}

            </ul>

        </div>
    )
}

