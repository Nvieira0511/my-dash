import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Reddit from "./Reddit/Reddit";
import DashboardNav from "./DashboardNav";

import "./Dashboard.css";

//reactrouter
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redditLoaded: false,
      redditData: {},
    };
    this.handleRedditFetch = this.handleRedditFetch.bind(this);
  }
  handleRedditFetch() {
    console.log("hereReddit fetch");
    let redditWorldNewsUrl = "https://www.reddit.com/r/worldnews/.json";
    let redditDesitnyUrl = "https://www.reddit.com/r/Destiny/.json";
    let redditUnityUrl = "https://www.reddit.com/r/unity/.json";
    let dataLimit = "?_limit=20";

    const redditWorldNewsFetch = fetch(redditWorldNewsUrl + dataLimit);
    const redditDestinyFetch = fetch(redditDesitnyUrl + dataLimit);
    const redditUnityFetch = fetch(redditUnityUrl + dataLimit);

    const redditData = { worldNews: [], destiny: [], unity: [] };
    //data fetch
    setTimeout(() => {
      redditWorldNewsFetch
        .then((res) => res.json())
        .then((json) => {
          redditData.worldNews.push(json.data.children);
        });
      redditDestinyFetch
        .then((res) => res.json())
        .then((json) => {
          redditData.destiny.push(json.data.children);
        });
      redditUnityFetch
        .then((res) => res.json())
        .then((json) => {
          redditData.unity.push(json.data.children);
        });
        console.log(redditData);
      this.setState({ redditData});
      console.log(this.state);
    }, 2000);
  }
  render() {
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <DashboardNav handleRedditFetch={this.handleRedditFetch} />
            }
          />
          <Route
            path="/reddit"
            element={
              <Reddit
                isLoaded={this.state.redditLoaded}
                setRedditLoaded={this.setRedditLoaded}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default Dashboard;
