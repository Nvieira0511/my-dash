import React, { Component } from "react";
import RedditCardContainer from "./RedditCardContainer";
import PropTypes from "prop-types";
import "./RedditContent.css";

class RedditContent extends Component {
  constructor(props) {
    super(props);
    this.NewsContainer = this.NewsContainer.bind(this);
    this.DestinyContainer = this.DestinyContainer.bind(this);
    this.PicsContainer = this.PicsContainer.bind(this);
    this.UnityContainer = this.UnityContainer.bind(this);
  }
  static propTypes = {
    redditData: PropTypes.arrayOf(PropTypes.object),
  };
  NewsContainer() {
    console.log(this.props);

    let newsReddit = this.props.redditNews;
    return <RedditCardContainer subreddit={'World News'} data={newsReddit} icon={"https://styles.redditmedia.com/t5_2qh13/styles/communityIcon_pldiwqvsyns91.png?width=256&v=enabled&s=3088f291b089bb5bc15599d429a759b258c6cbd5"}/>;
  }
  DestinyContainer() {
    console.log(this.props);

    let destinyReddit = this.props.redditDestiny;
    return <RedditCardContainer subreddit={'Destiny'} data={destinyReddit} icon={"https://styles.redditmedia.com/t5_2qnvz/styles/communityIcon_x9hq8nd59bg01.jpg?format=pjpg&s=56ede232406660afafc5341b1b8437da3ed11cf7"} />;
  }
  PicsContainer() {
    console.log(this.props);

    let picsReddit = this.props.redditPics;
    return <RedditCardContainer subreddit={'Pics'} data={picsReddit} />;
  }
  UnityContainer() {
    console.log(this.props);
    let unityReddit = this.props.redditUnity;
    return <RedditCardContainer subreddit={'Unity'} data={unityReddit} icon={"https://styles.redditmedia.com/t5_2qtuh/styles/communityIcon_rrr0wc4xt9p31.png?width=256&v=enabled&s=2b49c8f34cec7acf837de87673e9cfb09939560c"}  />;
  }
  render() {
    return (
      <div className="RedditContent">
        <div className="Header">
          <h1>Reddit</h1>
          <div className="Icon"></div>
        </div>
        <div className="RedditBody">
          {this.NewsContainer()}
          <div className="divider"></div>
          {this.DestinyContainer()}
          <div className="divider"></div>
          {this.UnityContainer()}
        </div>
      </div>
    );
  }
}

export default RedditContent;
