import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Loader from "./Loader";
export default function characterList({ selectItem, Characters, isLoading, onSelectHandler }) {
  // console.log(Characters);
  if (isLoading)
    return (
      <div className="character-list">
        <Loader />
      </div>
    );
  return (
    <div className="character-list">
      {
        Characters.map((item) => (<Character selectItem={selectItem} item={item} key={item.id} onSelectHandler={onSelectHandler} />
        ))
      }

    </div>
  );
}

function Character({ selectItem, item, onSelectHandler }) {
  return (
    <div className="list__item">
      <img src={item.image} alt={item.name} />
      <CharacterName item={item} />
      <CharacterInfo item={item} />
      <button className="icon red" onClick={() => onSelectHandler(item.id)} >
        {selectItem === item.id ? <EyeSlashIcon /> : <EyeIcon />}
      </button>
    </div>
  );
}

function CharacterName({ item }) {
  return (
    <h3 className="name">
      <span>{item.gender === "Male" ? "🧑" : "👩"}</span>
      <span>{item.name}</span>
    </h3>
  )
}

function CharacterInfo({ item }) {
  return (
    <div className="list-item__info  info">
      <span
        className={`status ${item.status === "Dead" ? "red" : ""}`}
      ></span>
      <span>{item.status}</span>
      <span>-{item.species}</span>
    </div>
  )
}