import { HeartIcon } from "@heroicons/react/24/outline";
export default function NavBar({ characterResult }) {
  return (
   
      <div className="navbar">
        <div className="navbar-logo">logo:|</div>
        <input type="search" placeholder="search" className="text-field" />
        <div className="navbar__result">found {characterResult} result</div>
        <div className="heart">
          <HeartIcon className="icon" />
          <span className="badge">4</span>
        </div>
      </div>
  
  );
}
