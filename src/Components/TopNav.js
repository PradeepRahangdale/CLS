import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

const TopNav = () => {
  let navigate = useNavigate()
  return (
    <div>
      <div style={{ height: "100px" }}>
        <nav>
          <div class="logo">
            <img src="data:image/png;base64,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"
              alt="Logo Image"/>
          </div>
          <div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
          <ul class="nav-links">
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Fetchscore">All Matchs</Link>
            </li>
            <li>
              <Link to="/Playerlistfetch">Player list</Link>
            </li>
            <li>
              <Link to="/Countrylistfetch">Country list</Link>
            </li>
            <li>
              <Link to="/Livescore">Livescore</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            
            <li>
              <button class="login-button" onClick={() => navigate("/Login")}>
                Login
              </button>
            </li>
            <li>
              <button class="join-button" onClick={() => navigate("/Join")}>
                Join
              </button>
            </li>
            <li>
              
              <button class="Search-button" onClick={() => navigate("/Search")}>
                Search
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div style={{ color: "red" }}>
        <Outlet />
      </div>


      <footer className="mainfooter">
        <div class="footer">
          <div class="row">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-youtube"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
          </div>

          <div class="row">
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div class="row">
           
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TopNav;
