import "./App.css";
import { Component } from "react";
import UserCard from "./components/UserCard";
import styled from "styled-components";
import Form from "./components/Form";
const AppStyle = styled.div`
  width: 100%;
  height: 100%;
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
  state = { user: "" };

  showUser = (inputValue) => {
    console.log(inputValue);
    this.setState({ user: inputValue, followers:[] });
  };
  render() {
    return (
      <AppStyle>
        <h1> Github User Card</h1>
        <Form showUser={this.showUser} />
        {this.state.user && <UserCard user={this.state.user} />}
      </AppStyle>
    );
  }
}

export default App;
