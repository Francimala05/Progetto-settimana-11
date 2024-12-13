import "./assets/spotify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Sidebar";
import Main from "./components/Main";
import Player from "./components/Player";
function App() {
  return (
    <>
      <div className="app-container">
        <NavBar />
        <div className="main-content">
          <Main />
          <Player />
        </div>
      </div>
    </>
  );
}

export default App;
