import './App.css';
import { GenreInputField } from './components/SearchBar.js';
import { useState } from 'react'

function App() {
  let enteredString = "";
  const [state, setState]= useState({
    enteredGenre: enteredString,
  });
  return (
    <div className="App">
      <GenreInputField/>
      <h1></h1>
      <h2>GABRIEL IS UP AND LIIIIIIVEEE BABY!!!!!</h2>
    </div>
  );
}

export default App;
