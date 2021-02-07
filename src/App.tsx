import { lazy, Suspense, useContext, useEffect } from "react";
import { ActionInterface, EpisodeInterface, PropsInterface } from "./interfaces/interfaces";
import { Store } from "./store/Store";
import { Link } from "@reach/router";

const EpisodesList = lazy(() => import("./components/EpisodesList/EpisodesList"))


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

  const handleClickFav = (episode: EpisodeInterface): ActionInterface => {
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


  const props: PropsInterface = {
    episodes: state.episodes,
    handleClickFav: handleClickFav,
    favourites: state.favourites
  }

  console.log(state)
  return (
    <>
      <header className="header-text">
        <div>
          <h1>Rick and Morty</h1>
          <p>Choose your favourite episodes</p>
        </div>

        <div>
          <Link to="/Home">Home</Link>
          <Link to="/favourites">Favourite</Link>
        </div>
        <div style={{ marginTop: 50 }}>
          Favourite (s) {state.favourites.length}
        </div>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </Suspense>
    </>
  );
}

export default App;
