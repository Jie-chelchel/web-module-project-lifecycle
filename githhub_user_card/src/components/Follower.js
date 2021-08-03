import React, { Component } from "react";
import styled from "styled-components";

const FollowerStyle = styled.div`
  background: white;
  color: black;
`;

class Follower extends Component {
  render() {
    return (
      <FollowerStyle>
        <h3>{this.props.follower.login}</h3>
        <h4>Github: {this.props.follower.html_url}</h4>
        <img width="100" src={this.props.follower.avatar_url} alt="followers" />
      </FollowerStyle>
    );
  }
}

export default Follower;
