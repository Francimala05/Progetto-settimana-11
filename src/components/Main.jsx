import { Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

const Main = () => {
  const [rockTracks, setRockTracks] = useState([]);
  const [loadingRock, setLoadingRock] = useState(true);
  const [popTracks, setPopTracks] = useState([]);
  const [loadingPop, setLoadingPop] = useState(true);
  const [hipHopTracks, setHipHopTracks] = useState([]);
  const [loadingHipHop, setLoadingHipHop] = useState(true);

  useEffect(() => {
    const fetchRockData = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
        );
        const data = await response.json();
        setRockTracks(data.data.slice(0, 4));
        setLoadingRock(false);
      } catch (error) {
        console.error("Errore nel recuperare i dati:", error);
        setLoadingRock(false);
      }
    };

    fetchRockData();
  }, []);

  useEffect(() => {
    const fetchPopData = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=kateparry"
        );
        const data = await response.json();
        setPopTracks(data.data.slice(0, 4));
        setLoadingPop(false);
      } catch (error) {
        console.error("Errore nel recuperare i dati:", error);
        setLoadingPop(false);
      }
    };

    fetchPopData();
  }, []);

  useEffect(() => {
    const fetchHipHopData = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"
        );
        const data = await response.json();
        setHipHopTracks(data.data.slice(0, 4));
        setLoadingHipHop(false);
      } catch (error) {
        console.error("Errore nel recuperare i dati:", error);
        setLoadingHipHop(false);
      }
    };

    fetchHipHopData();
  }, []);

  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <Row className="mainLinks justify-content-center mt-3">
        <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={10} md={9} lg={8}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-md-4 imgLinks py-3"
              id="rockSection"
            >
              {loadingRock ? (
                <p>Caricamento...</p>
              ) : (
                rockTracks.map((track) => (
                  <Col key={track.id} className="mb-4">
                    <Card>
                      <Card.Img variant="top" src={track.album.cover} />
                    </Card>

                    <p style={{ textAlign: "center" }}>
                      Track: {track.title} <br /> Artist: {track.artist.name}
                    </p>
                  </Col>
                ))
              )}
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={10} md={9} lg={8}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-md-4 imgLinks py-3"
              id="popSection"
            >
              {loadingPop ? (
                <p>Caricamento...</p>
              ) : (
                popTracks.map((track) => (
                  <Col key={track.id} className="mb-4">
                    <Card>
                      <Card.Img variant="top" src={track.album.cover} />
                    </Card>

                    <p style={{ textAlign: "center" }}>
                      Track: {track.title} <br /> Artist: {track.artist.name}
                    </p>
                  </Col>
                ))
              )}
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={10} md={9} lg={8}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-md-4 imgLinks py-3"
              id="hipHopSection"
            >
              {loadingHipHop ? (
                <p>Caricamento...</p>
              ) : (
                hipHopTracks.map((track) => (
                  <Col key={track.id} className="mb-4">
                    <Card>
                      <Card.Img variant="top" src={track.album.cover} />
                    </Card>

                    <p style={{ textAlign: "center" }}>
                      Track: {track.title} <br /> Artist: {track.artist.name}
                    </p>
                  </Col>
                ))
              )}
            </div>
          </div>
        </Col>
      </Row>
    </main>
  );
};

export default Main;
