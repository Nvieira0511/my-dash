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
  }
  componentDidMount() {
    try {
      fetch("/reddit")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
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
