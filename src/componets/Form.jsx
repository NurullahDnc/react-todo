import React, { useState } from 'react'

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {

    // alert mesajı icin, false ilk basta gizliyoruz
    const [alertWarning, setAlertWarning] = useState(false)
    const [alertSuccsess, setAlertSuccsess] = useState(false)



    //* Todo ekleme butonun tıklandıgında, veriyi state ediyor
    const submitTodoHandle = (e) => {
        e.preventDefault()

        //İsEmty func. str parametresi alıyor,  bosluk esit degil ise true donuyor
        const isEmpty = str => !str.trim().length;
        // isEmty inputText alıyor, setAlertWarning true yapıyor yani calıstırıyor, else de ekleme yapıyor
        if (isEmpty(inputText)) {
            setAlertWarning(true)

            //1s sonra uyarı mesajını kaldır
            setTimeout(() => {
                setAlertWarning(false)

            }, 1000);
        } else {
            setAlertSuccsess(true)

            setTimeout(() => {
                setAlertSuccsess(false)

            }, 1000);

            // inputText icerisine atıgımız input'un value'sini, todos'a atıcaz ordan TodoList'e gondericez array icerisinde object olarak
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Math.random() }

            ]);
            // inputu temizliyor
            setInputText("")
        }


    }

    //* input icerisinde value alma
    // inputtun value alındı, app.js tanımlanan state'ye gonderildi,  degerleri input icerisindeki value'e de tutuyoruz
    const inputTextHandle = (e) => {
        setInputText(e.target.value)
        // console.log(inputText)
    }

    //* secect' de secilenin value'sini gonderiyor ona gore filter yapacak
    const statusHandle = (e) => {
        setStatus(e.target.value)
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
                    <select onChange={statusHandle} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>

                <div className="alert-wrapper">
                    {/* alertWarning ture ise alert kodunu calıstır, false ise bos calsıtır */}

                    {alertWarning ? <div className="alert-warning">
                        <div>Input alanı    boş geçilemez!</div>
                    </div> : ""}

                    {alertSuccsess ? <div class="alert-success">
                        <div>Ekleme Başarılı.</div>
                    </div> : ""}


                </div>

            </form>

        </div>
    )
}

export default Form
