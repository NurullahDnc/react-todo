import React,{ useState } from 'react';
import './App.css';
import Form from './componets/Form'

function App() {
  // inputta degerleri almak icin
  const [ inputText, setInputText] = useState("");

  return (
    <div className="App">
      <header>
        <h1>MY TODO LİST</h1>
      </header>

      <Form 
        inputText = {inputText}
        setInputText = {setInputText}

      />
    
    </div>
  );
}

export default App;
