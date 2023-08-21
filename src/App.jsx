import { allCharacters } from "../data/data";
import "./App.css";
import NavBar from "./components/NavBar";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

export default function App() {
  const [characters, setcharacter] = useState([]);
  const [isLoading, setlodaing] = useState(false)
  useEffect(() => {
    setlodaing(true)
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setcharacter(data.results));
    setlodaing(false)
  }, [])
  return (
    <div className="container">
      <div className="app">
        <div>
          <NavBar characterResult={characters.length} />
        </div>
        <div className="main" >
          
         <CharacterList Characters={characters} isLoading={isLoading} />
        
          <CharacterDetail />
        </div>
      </div>
    </div>
  );
}
