import { allCharacters } from "../data/data";
import "./App.css";
import NavBar from "./components/NavBar";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
export default function App() {
  return (
    <div className="app">
      <div>
        <NavBar />
      </div>
      <div className="main">
        <CharacterList Characters={allCharacters} />
        <CharacterDetail />
      </div>
    </div>
  );
}
