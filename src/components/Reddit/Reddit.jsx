import React from "react";
import { Component } from "react";
import "./Reddit.css";

import RedditContent from "./RedditContent";
import RedditLoading from "./RedditLoading";

class Reddit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redditNews: [],
      redditDestiny: [],
      redditUnity: [],
    };
    this.myFunc = this.myFunc.bind(this);
    this.setLoaded = this.setLoaded.bind(this);
  }
  setLoaded() {
    this.props.setRedditLoaded();
  }
  myFunc() {
    let redditWorldNewsUrl = "https://www.reddit.com/r/worldnews/.json";
    let redditDesitnyUrl = "https://www.reddit.com/r/Destiny/.json";
    let redditUnityUrl = "https://www.reddit.com/r/unity/.json";
    let dataLimit = "?_limit=20";

    const redditWorldNewsFetch = fetch(redditWorldNewsUrl + dataLimit);
    const redditDestinyFetch = fetch(redditDesitnyUrl + dataLimit);
    const redditUnityFetch = fetch(redditUnityUrl + dataLimit);

    //data fetch
    setTimeout(() => {
      redditWorldNewsFetch
        .then((res) => res.json())
        .then((json) => {
          this.setState({ redditNews: json.data.children });
        });
      redditDestinyFetch
        .then((res) => res.json())
        .then((json) => {
          this.setState({ redditDestiny: json.data.children });
        });
      redditUnityFetch
        .then((res) => res.json())
        .then((json) => {
          this.setState({ redditUnity: json.data.children });
        });
      this.setLoaded();
    }, 2000);
  }
  render() {
    const data = { ...this.state };
    if (!this.props.isLoaded) {
      //this.myFunc();
    }
    return (
      <div className="RedditParent">
        {this.props.isLoaded ? <RedditContent {...data} /> : <RedditLoading />}
      </div>
    );
  }
}

export default Reddit;
