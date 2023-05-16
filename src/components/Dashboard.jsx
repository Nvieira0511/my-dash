import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Reddit from "./Reddit/Reddit";
import Weather from "./Weather/Weather";
import DashboardNav from "./DashboardNav";

import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<DashboardNav />} />
          <Route path="/reddit" element={<Reddit />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    );
  }
}

export default Dashboard;
