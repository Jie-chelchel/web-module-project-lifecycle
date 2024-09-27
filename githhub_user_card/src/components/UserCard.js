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

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user !== prevProps.user) {
      const fetchData = async () => {
        const { data } = await axios.get(
          `https://api.github.com/users/${this.props.user}`
        );
        console.log(data);
        this.setState({ userData: data });
        this.setState({ followers: [] });
      };
      fetchData();
    }
  }

  handleFollowers = () => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.github.com/users/${this.props.user}/followers`
      );
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
