import React, { Component } from "react";
import axios from "axios";
import UserFollowers from "./UserFollowers";
class UserCard extends Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      followers: [],
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.github.com/users/${this.props.user}`
      );
      console.log(data);
      this.setState({ userData: data });
    };
    fetchData();
  }

  handleFollowers = () => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.github.com/users/${this.props.user}/followers`
      );
      console.log(data);
      this.setState({ followers: data });
    };
    fetchData();
  };

  render() {
    return (
      <div>
        <h1>{this.state.userData.name}</h1>
        <img src={this.state.userData.avatar_url} alt="user" />
        <p>{this.state.userData.bio}</p>
        <button onClick={this.handleFollowers}>Click to See Followers</button>
        <UserFollowers followers={this.state.followers} />
      </div>
    );
  }
}

export default UserCard;
