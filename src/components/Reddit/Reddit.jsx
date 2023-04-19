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
    };
    this.setLoaded = this.setLoaded.bind(this);
  }
  setLoaded() {
    this.props.setRedditLoaded();
  }
  render() {
    return (
      <div className="RedditParent">
        {this.props.isLoaded ? <RedditContent {...this.props} /> : <RedditLoading />}
      </div>
    );
  }
}

export default Reddit;
