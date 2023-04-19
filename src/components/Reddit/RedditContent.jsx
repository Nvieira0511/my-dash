import React, { Component } from "react";
import RedditCardContainer from "./RedditCardContainer";
import PropTypes, { object } from "prop-types";
import "./RedditContent.css";
import { logDOM } from "@testing-library/react";

class RedditContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardContainers: [],
    };
    this.CreateCardContainer = this.CreateCardContainer.bind(this);
  }
  static propTypes = {
    redditData: PropTypes.object.isRequired,
  };
  componentDidMount() {
    this.CreateCardContainer();
  }
  CreateCardContainer() {
    let redditData = this.props.redditData;

    let redditWorldNews = redditData.worldNews;
    let redditDestiny = redditData.destiny;
    let redditUnity = redditData.unity;

    let containerdata = [
      ["World News", [redditWorldNews]],
      ["Destiny", [redditDestiny]],
      ["Unity", [redditUnity]],
    ];

    //foreach container data
    //return card container passing
    //in first element per index
    let containers = [];
    containers = containerdata.map((val, i) => {
      return <RedditCardContainer key={i} id={i} data={val} />;
    });
    this.setState({ cardContainers: containers });
  }
  render() {
    return (
      <div className="RedditContent">
        <div className="Header">
          <h1>Reddit</h1>
          <div className="Icon"></div>
        </div>
        <div className="RedditBody">
          {this.state.cardContainers}
          <div className="divider" />
        </div>
      </div>
    );
  }
}

export default RedditContent;
