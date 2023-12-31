import { useEffect, useState } from "react";
import { character, episodes } from "../../data/data";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { toast } from "react-hot-toast";
import Loader from "./Loader";

export default function CharacterDetail({ isAddedToFav, selectItem, onAddfavorite }) {
  //state
  const [character, setcharacter] = useState(null)
  const [isLoading, setLoading] = useState(false);
  const [episodes, setEpisodes] = useState([]);



  //fetch single charcter
  useEffect(() => {
    async function fetchdata() {
      try {
        setLoading(true)
        const response = `https://rickandmortyapi.com/api/character/${selectItem}`;
        const { data } = await axios.get(response)
        setcharacter(data)

        //episodes
        const episodesId = data.episode.map((e) => e.split("/").at(-1)); // [1, 2, 3]
        const { data: episodeData } = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodesId}`
        );
        setEpisodes([episodeData].flat())


      } catch {
        toast.error(error.response.data.error);
      }
      finally {
        setLoading(false)
      }
    }
    if (selectItem) fetchdata()
  }, [selectItem]);

  console.log(character)
  if (isLoading) {
    return (
      <div style={{ flex: 1 }}>
        <Loader />
      </div>

    )
  } if (!character || !selectItem) {
    return (
      <div style={{ flex: 1, color: "var(--slate-300)" }}>
        Please select a character.
      </div>
    )
  }
  return (
    <div style={{ flex: 1 }}>
      <CharacterInfo isAddedToFav={isAddedToFav} character={character} onAddfavorite={onAddfavorite} />
      <Characterepisode episodes={episodes} />
    </div>
  );
}

function CharacterInfo({ isAddedToFav, character, onAddfavorite }) {
  return (
    <div className="character-detail">
      <img
        className="character-detail__img"
        src={character.image}
        alt={character.name}
      />
      <div className="character-detail__info">
        <h3>
          <span>{character.gender === "Male" ? "🧑" : "👩"}</span>
          <span className="name">{character.name}</span>
        </h3>
        <div className=" info">
          <span
            className={`status ${character.status === "Dead" ? "red" : ""}`}
          ></span>
          <span>&nbsp; {character.status}</span>
          <span>&nbsp; {character.species}</span>
        </div>
        <div className="location">
          <p>Last know Location:</p>
          <p>{character.location.name}</p>
        </div>
        <div className="actions">
          {
            isAddedToFav ? (<p> already Added to favorites.</p>) : (<button onClick={() => onAddfavorite(character)} className="btn btn--primary">Add to Favorite</button>)
          }
        </div>
      </div>
    </div>
  )
}
function Characterepisode({ episodes }) {
  const [sortBy, setsortBy] = useState(true)
  //asc
  let sortedEpisodes;
  if (sortBy) {
    sortedEpisodes = [...episodes].sort(
      (a, b) => new Date(a.created) - new Date(b.created)
    );
  } else (
    sortedEpisodes = [...episodes].sort(
      (a, b) => new Date(b.created) - new Date(a.created)
    )
  )


  return (
    <div
      className="character-episodes">


      <div className="title">
        <h2>List of Episodes</h2>
        <button onClick={() => setsortBy(is => !is)}>
          {
            (sortBy ? (<ArrowUpCircleIcon className="icon" />) : <ArrowDownCircleIcon className="icon" />)
          }
        </button>
      </div>
      <ul className={sortedEpisodes.length > 42 ? "scroll" : ""}>
        {sortedEpisodes.map((item, index) => {
          return (
            <li key={item.id}>
              <div>

                {String(index + 1).padStart(2, "0")}
                - {item.episode} : <strong>{item.name}</strong>
              </div>
              <div className="badge badge--secondary">{item.air_date}</div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}