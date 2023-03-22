import React, { Component } from "react";
import "./RedditLoading.css";

class RedditLoading extends Component {
  render() {
    return (
      <div className="RedditLoading">
        <div className="LoadingImg"></div>
        <h3 className="LoadingText">Loading...</h3>
      </div>
    );
  }
}

export default RedditLoading;
