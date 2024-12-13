import { Button, Nav } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { BiHomeAlt, BiBook } from "react-icons/bi";
import "../App.css";
const NavBar = () => {
  return (
    <Nav
      className="col col-2 navbar navbar-expand-md fixed-left justify-content-between"
      id="sidebar"
    >
      <div className="container flex-column align-items-start">
        <a className="navbar-brand">
          <img src={logo} width="131" height="40" />
        </a>
        <Button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul>
              <li>
                <a
                  className="nav-item nav-link d-flex align-items-center"
                  href="#"
                >
                  <BiHomeAlt size={26} />
                  Home
                </a>
              </li>
              <li>
                <a
                  className="nav-item nav-link d-flex align-items-center"
                  href="#"
                >
                  <BiBook size={26} />
                  Your Library
                </a>
              </li>
              <li>
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <Button
                      className="btn btn-sm h-100"
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "gray",
                        color: "gray",
                      }}
                    >
                      GO
                    </Button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="nav-btn"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        <>
          <Button
            variant="outline-success"
            size="xs"
            style={{
              width: "180px",
              borderRadius: "20px",
              marginBottom: "20px",
              border: "1px solid white",
            }}
            className="signup-btn"
          >
            Sign Up
          </Button>
          <Button
            variant="outline-dark"
            size="xs"
            style={{
              width: "180px",
              borderRadius: "20px",
              marginBottom: "20px",
              border: "1px solid white",
            }}
            className="login-btn"
          >
            Login
          </Button>
        </>
        <a href="#"> Cookie Policy</a> | <a href="#"> Privacy</a>
      </div>
    </Nav>
  );
};

export default NavBar;
