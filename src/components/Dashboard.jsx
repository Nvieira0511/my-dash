import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

//reactrouter
class Dashboard extends Component {
  render() {
    return (
      <div className="dash">
        <Link to="/reddit">
          <div className="nav-link-reddit">
            <div className="nav-header">
              <h2>reddit</h2>
              <img
                className="reddit-icon"
                src="https://p.kindpng.com/picc/s/121-1217791_jpg-black-and-white-download-social-logo-character.png"
                alt=""
              />
            </div>
          </div>
        </Link>
        <div className="nav-link-weather">
          <div className="nav-header">
            <h2>reddit</h2>
            <img
              className="weather-icon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHKb20t7uE5A7ZUgTvJsINHlawOneyTVEoj1LVyU&s"
              alt=""
            />
          </div>
        </div>
        <div className="nav-link-reddit">
          <div className="nav-header">
            <h2>reddit</h2>
            <img
              className="reddit-icon"
              src="https://p.kindpng.com/picc/s/121-1217791_jpg-black-and-white-download-social-logo-character.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;