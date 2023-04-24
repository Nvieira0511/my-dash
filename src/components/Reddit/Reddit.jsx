import React from "react";
import { Component } from "react";
import "./Reddit.css";
import RedditContent from "./RedditContent";
import RedditLoading from "./RedditLoading";

class Reddit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redditData: {},
      shouldFetch: true,
      redditLoaded: false,
    };
    this.handleRedditFetch = this.handleRedditFetch.bind(this);
  }
  handleRedditFetch() {
    console.log("fetching");
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
          json.data.children.forEach((val) => {
            redditData.worldNews.push(val.data);
          });
        });
      redditDestinyFetch
        .then((res) => res.json())
        .then((json) => {
          json.data.children.forEach((val) => {
            redditData.destiny.push(val.data);
          });
        });
      redditUnityFetch
        .then((res) => res.json())
        .then((json) => {
          json.data.children.forEach((val) => {
            redditData.unity.push(val.data);
          });
        });
      this.setState({ redditData, redditLoaded: true });
    }, 2000);
  }
  componentDidMount() {
    this.handleRedditFetch();
  }

  render() {
    return (
      <div className="RedditParent">
        {this.state.redditLoaded ? (
          <RedditContent {...this.state.redditData} />
        ) : (
          <RedditLoading />
        )}
      </div>
    );
  }
}

export default Reddit;
