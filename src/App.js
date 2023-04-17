import React from "react";
import "./App.css";
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Reddit from "./components/Reddit/Reddit";

class App extends Component {
  /*
constructor(props) {
    super(props);
    this.state = {
      redditLoaded: false,
    };
    this.setRedditLoaded =  this.setRedditLoaded.bind(this)
  }
  setRedditLoaded(){
    this.setState({redditLoaded: true});
  }
*/
  
  render() {
    return (
      <div className="App">
        <Dashboard />
        {/*<Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/reddit"
            element={<Reddit isLoaded={this.state.redditLoaded} setRedditLoaded = {this.setRedditLoaded}/>}
          />
          {/* <Dashboard />}
        </Routes> */}
      </div>
    );
  }
}

export default App;
