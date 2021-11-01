import React, {useState} from "react";

export function GenreInputField(props) {
  let enteredString = "";
  const [state, setState]= useState({
    enteredGenre: enteredString,
  });
  function handleChange(e) {
    enteredString = e.target.value;
    setState({
      enteredGenre: enteredString,
    });
  }

  return (
    <div className="inputFieldContainer">
      <label for="inputField">inputField {state.enteredGenre} </label>
      <input id="inputField" className="inputField" type="text"
        placeholder={ "Genres and Subgenres" } onChange={handleChange}/>
    </div>
  );
}