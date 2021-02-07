import { useContext, useEffect } from "react";
import { ActionInterface, EpisodeInterface } from "./interfaces/interfaces";
import { Store } from "./store/Store";



function App() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {

    state.episodes.length === 0 && fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.episodes])

  const fetchData = async () => {
    const URL = "http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
    const data = await fetch(URL);
    const dataJSON = await data.json();

    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    })
  }

  const handleClickFave = (episode: EpisodeInterface): ActionInterface => {
    const episodeInfave = state.favourites.includes(episode);

    let dispatchObject = {
      type: "ADD_FAV",
      payload: episode
    }

    if (episodeInfave) {
      const favouritesWithEpisode = state.favourites.filter((fav: EpisodeInterface) => fav.id !== episode.id)

      dispatchObject = {
        type: "REMOVE_FAV",
        payload: favouritesWithEpisode
      }

    }
    return dispatch(dispatchObject);
  }

  console.log(state)
  return (
    <>
      <header className="header-text">
        <div>
          <h1>Rick and Morty</h1>
          <p>Choose your favourite episodes</p>
        </div>
        <div style={{ marginTop: 50 }}>
          Favourite (s) {state.favourites.length}
        </div>
      </header>

      <section className="episode-layout">
        {state.episodes.map((episode: EpisodeInterface) => {
          return (
            <section className="episode-box" key={episode.id}>
              <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
              <p>{episode.name}</p>
              <section>
                <div>Season: {episode.season} Numa: {episode.number}</div>
                <button key={episode.id} type="button" onClick={() => { handleClickFave(episode) }}>
                  {state.favourites.find((fav: EpisodeInterface) => fav.id === episode.id) ? "Unfav" : "Fav"}
                </button>
              </section>
            </section>
          )
        })}
      </section>
    </>
  );
}

export default App;
