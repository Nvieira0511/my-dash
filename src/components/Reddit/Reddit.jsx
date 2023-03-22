import React from "react";
import { Component } from "react";
import "./Reddit.css"

import RedditContent from "./RedditContent";
import RedditLoading from "./RedditLoading";

class Reddit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redditNews: [],
      redditDestiny: [],
      redditUnity: [],
      isLoaded: false,
    };
    this.myFunc = this.myFunc.bind(this);
  }
  myFunc() {
    let redditWorldNewsUrl = "https://www.reddit.com/r/worldnews/.json";
    let redditDesitnyUrl = "https://www.reddit.com/r/Destiny/.json";
    let redditPicsUrl = "https://www.reddit.com/r/pics/.json";
    let redditUnityUrl = "https://www.reddit.com/r/unity/.json";
    let redditUnit3DyUrl = "https://www.reddit.com/r/Destiny/.json";
    let redditOntarioUrl = "https://www.reddit.com/r/Destiny/.json";
    let redditCanadaUrl = "https://www.reddit.com/r/Destiny/.json";
    let redditWebDevUrl = "https://www.reddit.com/r/Destiny/.json";
    let redditNewsUrl = "https://www.reddit.com/r/Destiny/.json";
    let dataLimit = "?_limit=10";

    const redditWorldNewsFetch = fetch(redditWorldNewsUrl + dataLimit);
    const redditDestinyFetch = fetch(redditDesitnyUrl + dataLimit);
    const redditUnityFetch = fetch(redditUnityUrl + dataLimit);

    //data fetch
    setTimeout(() => {
      console.log("fetching");
      redditWorldNewsFetch
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data.children);
        this.setState({ redditNews: json.data.children });
        console.log(this.state);
      });
      redditDestinyFetch
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data.children);
        this.setState({ redditDestiny: json.data.children });
      });
      redditUnityFetch
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data.children);
        this.setState({ redditUnity: json.data.children });
      });
      this.setState({isLoaded: true})
    }, 2000);
  }
  render() {
    const { isLoaded } = this.state;
    const data = { ...this.state };
    if (!isLoaded) {
      this.myFunc();
    }
    return (
      <div className="RedditParent">
        {this.state.isLoaded ? <RedditContent {...data} /> : <RedditLoading />}
      </div>
    );
  }
}

export default Reddit;
