import React, { Component } from "react";
import Follower from "./Follower";

class UserFollowers extends Component {
  render() {
    return (
      <div>
        {this.props.followers.map((follower) => {
          console.log(follower);
          return <Follower follower={follower} key={follower.id} />;
        })}
      </div>
    );
  }
}

export default UserFollowers;
