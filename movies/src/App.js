import React, { useState } from 'react' ;
import "./App.css";

function App() {
  // Stany przechowujące dane formularza
  const [tytul, setTytul] = useState("")
  const [rodzaj, setRodzaj] = useState("")

  // Funkcja obsługująca przycisk "Dodaj"
  const handleSubmit = (e) => {
    e.preventDefault(); //Zapobiega odświeżeniu strony po kliknięciu

    //Wyświetlanie danych formularza w konsoli
    console.log()
  return (
    <div className="App">
      <form>
        <div class="mb-3">
          <label for="film" class="form-label">Tytuł filmu</label>
          <input type="text" class="form-control" id="film" />
          </div>
         <select name="Rodzaj">
          <option value="1"> Komedia</option>
          <option value="2"> Obyczajowy </option>
          <option value="3"> Sensacyjny </option>
          <option value="4"> Horror </option>
         </select>
         <button type="button">Dodaj</button>
    </form>
    </div>
     );
}

export default App;
