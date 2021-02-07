import { Link } from "@reach/router";
import { useContext } from "react";
import { Store } from "./store/Store";

function App(props: any) {
  const { state } = useContext(Store);

  return (
    <>
      <header className="header-text">
        <div>
          <h1>Rick and Morty</h1>
          <p>Choose your favourite episodes</p>
        </div>

        <div style={{ marginTop: 40 }}>
          <Link to="/" style={{ marginRight: 30, textDecoration: "none" }}>Home</Link>
          <Link to="/favourites" style={{ textDecoration: "none" }}>Favourite (s) {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}

    </>
  );
}

export default App;
