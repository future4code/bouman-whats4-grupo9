import React from 'react';
import './App.css';
import Whats from "./components/whats/whats";

const valoresRecebidos = [
  {userName: ""},
  {userMsg: ""}
]

function App() {
  return (
    <div className="App">
    {valoresRecebidos.map(person => {
            return <Whats userName={person.userName} userMsg={person.userMsg}/>
                }
        ) 
    }
    <Whats/>

    </div>
  );
}

export default App;



