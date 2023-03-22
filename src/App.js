import React from "react";
import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Reddit from './components/Reddit/Reddit'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reddit" element={<Reddit />} />
            {/* <Dashboard /> */}
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
