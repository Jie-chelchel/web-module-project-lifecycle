import React, { Component } from "react";
import axios from "axios";
import UserFollowers from "./UserFollowers";
class UserCard extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://api.github.com/users/jie-chelchel"
      );
      console.log(data);
      this.setState({ user: data });
    };
    fetchData();
  }

  handleFollowers = () => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://api.github.com/users/jie-chelchel/followers"
      );
      console.log(data);
      this.setState({ followers: data });
    };
    fetchData();
  };

  render() {
    return (
      <div>
        <h1>{this.state.user.name}</h1>
        <img src={this.state.user.avatar_url} alt="user" />
        <p>{this.state.user.bio}</p>
        <button onClick={this.handleFollowers}>Click to See Followers</button>
        <UserFollowers followers={this.state.followers} />
      </div>
    );
  }
}

export default UserCard;
