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
  handleRedditFetch() {
    console.log("fetching");
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
    console.log("getting reddit data");
    // try {
    //   fetch("/reddit")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       this.setState({ redditData: data, redditLoaded: true });
    //     });
    // } catch (error) {
    //   console.log(error);
    // }

    try {
      fetch("/reddit").then((res) => {
        console.log(res);

        res.json().then((json) => {
          console.log(json);
        });
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
