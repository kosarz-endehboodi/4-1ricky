import { allCharacters, character } from "../data/data";
import "./App.css";

import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import { useEffect, useState } from "react";
import Loader, { loadCharcter } from "./components/Loader";
import NavBar, { Search, SearchResulth, Favorite } from "./components/NavBar";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

export default function App() {
  const [characters, setcharacter] = useState([]);
  const [isLoading, setlodaing] = useState(false)
  const [query, setquery] = useState("")
  const [selectItem, setSelectitem] = useState(null)
  const [favorites, setFavorites] = useState([])

  useEffect(() => {

    async function fetchlistloader() {
      try {
        setlodaing(true)
          ;
        const response = `https://rickandmortyapi.com/api/character/?name=${query}`;
        const { data } = await axios.get(response)
        setcharacter(data.results)

        //for array set
        //{data}=> set(data.res)
        //data=set(data.data.res)
      } catch (err) {
        // for real project : err.response.data.message or error
        toast.error(err.response.data.error)
      } finally {
        setlodaing(false)
      }


    }
    fetchlistloader();
  }, [query])

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


  //handler click items
  const handlerSelectCharcter = (id) => {
    setSelectitem(previd => previd === id ? null : id)
  }
  const handlrAddFav = (charfav) => {
    setFavorites(prev => [...prev, charfav])
  }
const isAddedToFav=  favorites.map(fav=>fav.id).includes(selectItem);

  return (
    <div className="container">

      <div className="app" >
        <Toaster />
        <NavBar >
          <Search query={query} setquery={setquery} />
          <SearchResulth numOfResult={characters.length} />
          <Favorite numOfFavorite={favorites.length} />ّ
        </NavBar>

        <div className="main"  >
          <CharacterList
            onSelectHandler={handlerSelectCharcter}
            selectItem={selectItem}
            Characters={characters} />

          <CharacterDetail  isAddedToFav={isAddedToFav} onAddfavorite={handlrAddFav} selectItem={selectItem} />
        </div>
      </div>
    </div>
  );

}


