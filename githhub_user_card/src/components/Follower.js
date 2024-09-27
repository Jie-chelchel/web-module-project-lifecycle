import React, { Component } from "react";
import styled from "styled-components";

const FollowerStyle = styled.div`
  background: white;
  color: black;
  display:flex:
  flex-wrap: column;
& div {
  display:flex;
  justify-content: center;
  align-items:center;
}


& a {
    text-decoration: none;
    background: #246b6e;
    color: white;
    border-radius: 10px;
    padding: 0.5rem 1rem; 
    margin: 1rem;

 
  
  }
`;

class Follower extends Component {
  render() {
    return (
      <FollowerStyle>
        <h3>{this.props.follower.login}</h3>
        <div>
          {" "}
          <img
            width="100"
            src={this.props.follower.avatar_url}
            alt="followers"
          />
          <a href={this.props.follower.html_url} target="_blank">
            Github
          </a>
        </div>
      </FollowerStyle>
    );
  }
}

export default Follower;
