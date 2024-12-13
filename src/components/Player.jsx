import next from "../assets/playerbuttons/next.png";
import play from "../assets/playerbuttons/play.png";
import prev from "../assets/playerbuttons/prev.png";
import repeat from "../assets/playerbuttons/repeat.png";
import shuffle from "../assets/playerbuttons/shuffle.png";
import { useSelector } from "react-redux";

const Player = () => {
  const currentTrack = useSelector((state) => state.player.currentTrack);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-2">
      <div className="row align-items-center justify-content-center h-100">
        <div className="col-3 d-flex justify-content-center">
          <div className="d-flex align-items-center" style={{ color: "white" }}>
            {currentTrack ? (
              <>
                <div className="d-flex flex-column me-3">
                  <strong>{currentTrack.title}</strong>
                  <span>{currentTrack.artist.name}</span>
                </div>
                <img
                  src={currentTrack.album.cover}
                  alt="Album Cover"
                  style={{
                    width: "60px",
                    height: "60px",
                    marginTop: "10px",
                    borderRadius: "4px",
                  }}
                />
              </>
            ) : (
              <span>Nessuna canzone selezionata</span>
            )}
          </div>
        </div>

        <div className="col-4 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex justify-content-evenly w-75">
            <a href="#" style={{ width: "30px", height: "30px" }}>
              <img src={shuffle} style={{ width: "50%", height: "50%" }} />
            </a>
            <a href="#" style={{ width: "30px", height: "30px" }}>
              <img src={prev} style={{ width: "50%", height: "50%" }} />
            </a>
            <a href="#" style={{ width: "30px", height: "30px" }}>
              <img src={play} style={{ width: "50%", height: "50%" }} />
            </a>
            <a href="#" style={{ width: "30px", height: "30px" }}>
              <img src={next} style={{ width: "50%", height: "50%" }} />
            </a>
            <a href="#" style={{ width: "30px", height: "30px" }}>
              <img src={repeat} style={{ width: "50%", height: "50%" }} />
            </a>
          </div>
          <div
            className="progress mt-3"
            style={{ height: "6px", width: "100%" }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
