import "./App.css";
import { Component } from "react";
import UserCard from "./components/UserCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Github User Card</h1>
        <UserCard />
      </div>
    );
  }
}

export default App;
