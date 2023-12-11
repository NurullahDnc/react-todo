import React from 'react'

export default function Todo({text, todo, todos, setTodos}) {

    //* Delete yapma
    const deleteHandle = ()=>{
        //tıklandıgında state icerisineki todosu filter et icindeki todos ile,  map sonrası donen todo, esit olmayanı don
        setTodos(todos.filter((el)=> el.id !== todo.id ))
    }

    //* tıklanılan Todoyu secme
    const completeHandle = ()=>{
        setTodos(todos.map((item)=>{
            // tıklanılan todoyu alıyoruz
            if(item.id === todo.id){
                return {
                    //item icerisindekinin completed tamamıını al, ! completed tersini al
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }


    return (
        // . Todoları burda tanımladık, todoList'de toplayacaz
        
        //. todo icerisinde completed true ise class'in icerisne completed yazdır, false ise bos yazdır
        <div className={`todo ${todo.completed ? "completed" : ""} `}>
            <button onClick={completeHandle} className="complete-btn">
                <i className="fas fa-check-circle"></i>
            </button>
        
            <li className="todo-item">{text} </li>

            <button onClick={deleteHandle} className="trash-btn">
                <i className="fa fa-minus-circle"></i>
            </button>

        </div>

    )
}
