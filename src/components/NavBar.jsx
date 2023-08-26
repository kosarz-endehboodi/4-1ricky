import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "./Modal";
import { character } from "../../data/data";
import { Character } from "./CharacterList";
export default function NavBar({ children }) {
  return (

    <nav className="navbar">
      <Logo />
      {children}

    </nav>

  );
}

function Logo() {
  return <div className="navbar-logo">logo:|</div>
}

export function Search({ query, setquery }) {
  return (
    <input value={query}
      onChange={(e) => setquery(e.target.value)}
      type="search"
      placeholder="search..."
      className="text-field" />
  )
}

export function SearchResulth({ numOfResult }) {
  return (
    <div className="navbar__result">
      found {numOfResult} result</div>)
}

export function Favorite({ favorites, deletfav }) {
  const [open, setopen] = useState(false)
  return (
    <>
      <Modal title="list of favorite chrecter "
        onOpen={setopen} open={open}>
        {favorites.map((item) => <Character onSelectHandler={() => { }} item={item} selectItem={1} >
          <button onClick={()=>deletfav(item.id)}  className="red icon"><TrashIcon /></button>
        </Character>)}
      </Modal>
      <div className="heart" onClick={() => setopen((is) => !is)}>
        <HeartIcon className="icon" />
        <span className="badge">{favorites.length}</span>
      </div>
    </>
  )
}