import React from "react";
import { Component } from "react";
import "./Reddit.css";
import RedditContent from "./RedditContent";
import RedditLoading from "./RedditLoading";

class Reddit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redditData: { worldNews: [], destiny: [], unity: [] },
      shouldFetch: true,
      redditLoaded: false,
    };
    this.handleRedditFetch = this.handleRedditFetch.bind(this);
  }
  handleRedditFetch() {
    console.log("fetching");
    console.log("getting reddit data");
    setTimeout(() => {
      try {
        fetch("/reddit")
          .then((res) => res.json())
          .then((data) => {
            this.setState({ redditData: data, redditLoaded: true });
          });
      } catch (error) {
        console.log(error);
      }
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
