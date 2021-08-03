import React, { Component } from "react";

class Follower extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.follower.login}</h3>
        <h4>Github: {this.props.follower.html_url}</h4>
        <img width="200" src={this.props.follower.avatar_url} alt="followers" />
      </div>
    );
  }
}

export default Follower;
