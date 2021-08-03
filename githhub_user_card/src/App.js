import "./App.css";
import { Component } from "react";
import UserCard from "./components/UserCard";
import styled from "styled-components";

const AppStyle = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  background: #323438;
  text-align: center;

  & input {
    width: 30%;
    margin: 1rem;
    padding: 0.5rem 1rem;
  }

  & button {
    padding: 0.3rem 1rem;
    border-radius: 10px;
    border: none;
  }
`;

class App extends Component {
  state = { user: "", showUser: false };

  searchUser = (e) => {
    this.setState({ user: e.target.value });
  };

  showUser = (e) => {
    e.preventDefault();
    this.setState({ showUser: true });
  };
  render() {
    return (
      <AppStyle>
        <h1> Github User Card</h1>
        <form>
          <input
            type="text"
            onChange={this.searchUser}
            value={this.state.user}
            placeholder="Please Enter a Git Hub Name "
          />
          <button onClick={this.showUser}>Search User</button>
        </form>
        {this.state.showUser && <UserCard user={this.state.user} />}
      </AppStyle>
    );
  }
}

export default App;
