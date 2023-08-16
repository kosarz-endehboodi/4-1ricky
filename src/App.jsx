import { allCharacters } from "../data/data";
import "./App.css";
import NavBar from "./components/NavBar";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import { useState } from "react";
export default function App() {
  const [characters, setcharacter] = useState(allCharacters);
  return (
    <div className="container">
      <div className="app">
        <div>
          <NavBar characterResult={characters.length}/>
        </div>
        <div className="main" >
          <CharacterList Characters={allCharacters} />
          <CharacterDetail />
        </div>
      </div>
    </div>
  );
}
