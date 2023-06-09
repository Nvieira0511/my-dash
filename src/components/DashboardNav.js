import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./DashboardNav.css";

class DashboardNav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dash">
        {/* <Link to="/reddit">
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
        </Link> */}
        <Link to="/weather">
          <div className="nav-link-weather">
            <div className="nav-header">
              <h2>weather</h2>
              <img
                className="weather-icon"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHKb20t7uE5A7ZUgTvJsINHlawOneyTVEoj1LVyU&s"
                alt=""
              />
            </div>
          </div>
        </Link>
        <Link to="/todos">
          <div className="nav-link-todos">
            <div className="nav-header">
              <h2>Todos</h2>
              <h2>todosahahahareactually</h2>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
export default DashboardNav;
