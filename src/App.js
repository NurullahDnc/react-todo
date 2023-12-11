import React,{ useState } from 'react';
import './App.css';
import Form from './componets/Form'
import TodoList from './componets/TodoList';

function App() {
  // inputta degerleri almak icin
  const [ inputText, setInputText] = useState("");

  //. todoları tutacak, formdan alacak - todolist ya ordan todo gonderecek
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>MY TODO LİST</h1>
      </header>

      <Form 
        inputText = {inputText}
        setInputText = {setInputText}
        //. todosları formdan alıcaz, Todo list'e gonderecez
        todos = {todos}
        setTodos = {setTodos}

      />

      <TodoList 
      
      // ekleme yapmak icin veriyi TodoList'e gonderiyoruz
      todos = {todos}
      setTodos = {setTodos}

      />
    
    </div>
  );
}

export default App;
