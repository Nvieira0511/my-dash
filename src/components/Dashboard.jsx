import React from "react";
import { Component } from "react";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Reddit from "./Reddit/Reddit";
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
          <Route path="/" element={<DashboardNav />} />
          <Route path="/reddit" element={<Reddit />} />
        </Routes>
      </div>
    );
  }
}

export default Dashboard;
