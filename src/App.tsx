import { useContext, useEffect } from "react";
import { Store } from "./store/Store";

function App() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {

    state.episodes.length === 0 && fetchData()
  }, [state.episodes])

  const fetchData = async () => {
    const URL = "http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
    const data = await fetch(URL);
    const dataJSON = await data.json();

    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON
    })
  }

  console.log(state)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Rick and Morty cartoon
        </p>
          Let's do this
      </header>
    </div>
  );
}

export default App;
