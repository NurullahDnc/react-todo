import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './componets/Form'
import TodoList from './componets/TodoList';

function App() {
  // inputta degerleri almak icin
  const [inputText, setInputText] = useState("");
  //. todoları tutacak, formdan alacak - todolist ya ordan todo gonderecek
  const [todos, setTodos] = useState([]);
  //select de secilenlerin adını tutacak, form'a gonderdik
  const [status, setStatus] = useState("all")
  //select de filter yapacak, altaki func. da
  const [filteredTodos, setFilteredTodos] = useState([])

  console.log(filteredTodos)
  

  useEffect(()=>{
    //filterHandle degistiginde calısın?  , altaki yorum satıırı uyarıyı engeliyor, filterHandle burda yazamamız gerek veya
    filterHandle(status) 
  },[todos, status]) //eslint-disable-line  



  // secilene gore todoları getirme
  const filterHandle = () => {
    //status'u gonderiyor all olarak
    switch (status) {
      // status'un degeri completed ise altaki kodu calıstır
      case "completed":
        //.  setFilteredTodos guncelle, todos'u filter et todo.completed true esit olanları getir
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);   // tamaını getir yani all  
        break;
    }
  }


  return (
    <div className="App">
      <header>
        <h1>MY TODO LİST</h1>
      </header>

      <Form
        inputText={inputText}
        setInputText={setInputText}
        //. todosları formdan alıcaz, Todo list'e gonderecez
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}

      />

      <TodoList
        // ekleme yapmak icin veriyi TodoList'e gonderiyoruz
        todos={todos}
        setTodos={setTodos}
        // select'de secilene gore filter yapan state
        filteredTodos={filteredTodos}
      />

    </div>
  );
}

export default App;
