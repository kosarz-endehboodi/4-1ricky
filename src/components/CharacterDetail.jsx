import { character } from "../../data/data";

export default function CharacterDetail() {
  return (
    <div style={{ flex: 1 }}>
      <div className="character-detail">
        <img className="character-detail__img" src={character.image} alt={character.name} />
        <div className="character-detail__info">
        <span>{character.gender === "Male" ? "🧑" : "👩"}</span>
         <h3 className="name">{character.name}</h3>
        </div>
      </div>
      <div className="character-episodes">2</div>
    </div>
  );
}
