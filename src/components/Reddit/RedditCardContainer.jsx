import React, { Component } from "react";
import PropTypes from "prop-types";
import "./RedditCardContainer.css";
import RedditCard from "./RedditCard";

class RedditCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.CreateCards = this.CreateCards.bind(this);
  }
  componentDidMount() {
    this.CreateCards();
  }
  CreateCards() {
    let title = this.props.data[0];
    let content = this.props.data[1];
    let cards = [];
    cards = content.map((val) => {
      return val;
    });
    this.setState({ data: cards[0] }, () => {
      console.log(this.state);
    });
  }
  render() {
    return (
      <div className="card-list-subreddit">
        <div className="card-list-header">
          {/* <h3>{this.state.title}</h3> */}
        </div>
        <div className="card-list">
          {this.state.data.map((val, i) => {
            return <RedditCard key={i} data={val} />;
          })}
        </div>
      </div>
    );
  }
}

export default RedditCardContainer;
