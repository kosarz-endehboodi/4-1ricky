import { allCharacters } from "../data/data";
import "./App.css";
import NavBar from "./components/NavBar";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

export default function App() {
  const [characters, setcharacter] = useState([]);
  const [isLoading, setlodaing] = useState(false)

  useEffect(() => {
    async function fetchlistloader() {
      try {
        setlodaing(true)
          ;
        const response = "https://rickandmortyapi.com/api/character";
        const { data } = await axios.get(response)
        setcharacter(data.results)
      } catch (err) {
        // for real project : err.response.data.message or error
        toast.error(err.response.data.error)
      } finally {
        setlodaing(false)
      }

    }
    fetchlistloader();
  }, [])

  //with async
  // useEffect(() => {
  //   async function fetchlistloader() {
  //     try {
  //       setlodaing(true)
  //       const response = await fetch("https://rickandmortyapi.com/api/character")
  //       if (!response.ok) throw new Error("something went werong")
  //       const data = await response.json()
  //       setcharacter(data.results);
  //     } catch (err) {
  //       toast.error(err.message)
  //     } finally {
  //       setlodaing(false)
  //     }

  //   }
  //   fetchlistloader();
  // }, [])

  if (isLoading) {
    return (
      <Loader />
    )
  } else {
    return (
      <div className="container">

        <div className="app" >
          <Toaster />
          <div>
            <NavBar characterResult={characters.length} />
          </div>
          <div className="main"  >

            <CharacterList Characters={characters} />

            <CharacterDetail />
          </div>
        </div>
      </div>
    );

  }
}

