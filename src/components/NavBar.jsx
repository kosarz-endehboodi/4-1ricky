import { HeartIcon } from "@heroicons/react/24/outline";

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

export function Favorite({numOfFavorite}) {
  return (<div className="heart">
    <HeartIcon className="icon" />
    <span className="badge">{numOfFavorite}</span>
  </div>)
}