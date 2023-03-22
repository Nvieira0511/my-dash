import React, { Component } from "react";
import PropTypes from "prop-types";
import "./RedditCardContainer.css";
import RedditCard from "./RedditCard";

class RedditCardContainer extends Component {
  constructor(props) {
    super(props);
    this.RenderCards = this.RenderCards.bind(this);
  }

  static propTypes = {};

  RenderCards() {
    console.log(this.props);
    let cardContainer = [];
    return (cardContainer = this.props.data.map((arr, key) => {
      if (key > 5) return;
      return <RedditCard key={key} val={arr.data} />;
    }));
  }

  render() {
    let subreddit = this.props.subreddit;

    return (
      <div className="card-list-subreddit">
        <div className="card-list-header">
          <h3>{subreddit}</h3>
          <img src={this.props.icon} alt="" />
        </div>

        <div className="card-list">{this.RenderCards()}</div>
      </div>
    );
  }
}

export default RedditCardContainer;
