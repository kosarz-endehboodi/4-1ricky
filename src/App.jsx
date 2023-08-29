import { allCharacters, character } from "../data/data";
import "./App.css";

import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import { useEffect, useState } from "react";
import Loader, { loadCharcter } from "./components/Loader";
import NavBar, { Search, SearchResulth, Favorite } from "./components/NavBar";
import { Toaster, toast } from "react-hot-toast";
import axios, { isCancel } from "axios";
// import Modal from "./components/Modal";
import useCharecter from "./Hooks/useChrecter";
import useLocal from "./Hooks/useLocalstorage";





export default function App() {

  const [query, setquery] = useState("")
  const { isLoading, characters } = useCharecter(query)
  const [selectItem, setSelectitem] = useState(null)
  //fav set local
  const [favorites, setFavorites] = useLocal("favorites", []);
  const [count, setcount] = useState(0)


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

  //counts

  //
  //
  useEffect(() => {
    const interval = setInterval(() => setcount((c) => c + 1), 1000);
    return () => {
      clearInterval(interval)
    }
    // return function (){}
  }, [count]);



  const handlerSelectCharcter = (id) => {
    setSelectitem(previd => previd === id ? null : id)
  }
  const handlrAddFav = (charfav) => {
    setFavorites(prev => [...prev, charfav])
  }
  const isAddedToFav = favorites.map(fav => fav.id).includes(selectItem);

  const onHandeldeletFav = (id) => {

    setFavorites(favorites.filter((fav) => fav.id !== id));
  }

  return (
    <div className="container">
      <div className="app" >
        <div>{count}</div>
        <Toaster />

        <NavBar >
          <Search query={query} setquery={setquery} />
          <SearchResulth numOfResult={characters.length} />
          <Favorite favorites={favorites} deletfav={onHandeldeletFav} />
        </NavBar>

        <div className="main"  >
          <CharacterList
            isLoading={isLoading}
            onSelectHandler={handlerSelectCharcter}
            selectItem={selectItem}
            Characters={characters} />



          <CharacterDetail isAddedToFav={isAddedToFav} onAddfavorite={handlrAddFav} selectItem={selectItem} />
        </div>
      </div>
    </div>
  );

}


