import React, { Component } from "react";
import "./RedditCard.css";

class RedditCard extends Component {
  static propTypes = {
    // title: PropTypes.string.isRequired
  };
  static defaultProps = {};
  render() {
    console.log(this.props);
    let redditLink = "Reddit.com/";
    let title = this.props.val.title;
    let url = this.props.val.url;
    let permaLink = this.props.val.permalink;
    let author = this.props.val.author;
    let subRedditPrefix = this.props.val.subreddit_name_prefixed;
    let upvotes = this.props.val.score;
    let comments = this.props.val.num_comments;
    let date = this.props.val.created;

    return (
      <div className="card-body">
        <div className="card-header">
          <a href={redditLink + subRedditPrefix}>{subRedditPrefix}</a>
          <p>u/{author}</p>
        </div>
        {url ? (
          <div className="card-img">
            <a href={url}>
              <img src={url} alt="" />
            </a>
          </div>
        ) : (
          <div className="card-img-none"></div>
        )}
        <div className="card-title">
          <a href={redditLink + permaLink}>{title}</a>
        </div>
        <div className="card-footer">
          <div className="card-updoots">
            <img
              src="https://www.transparentpng.com/thumb/up-arrow/m6xCB1-up-arrow-vector.png"
              alt=""
            />
            <p>{upvotes}</p>
          </div>
          <div className="card-stats">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png"
              alt=""
            />
            <p>{comments}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RedditCard;
