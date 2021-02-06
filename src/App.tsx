import { useContext, useEffect } from "react";
import { Store } from "./store/Store";

interface EpisodeInterface {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: { medium: string, original: string }
  name: string
  number: number
  runtime: number
  season: number
  summary: string
  type: string
  url: string
}

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

  console.log(state)
  return (
    <>
      <header className="header">
        <h1>Rick and Morty</h1>
        <p>Choose your favourite episodes</p>
      </header>

      <section className="episode-layout">
        {state.episodes.map((episode: EpisodeInterface) => {
          return (
            <section className="episode-box">
              <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
              <p>{episode.name}</p>
              <section>
                Season: {episode.season} Numa: {episode.number}
              </section>
            </section>
          )
        })}
      </section>
    </>
  );
}

export default App;
