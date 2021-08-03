import React, { Component } from "react";

class Form extends Component {
  state = { inputValue: "" };

  searchUser = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  submitUser = (e) => {
    e.preventDefault();
    this.props.showUser(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.searchUser}
          value={this.state.inputValue}
          placeholder="Please Enter a Git Hub Name "
        />
        <button onClick={this.submitUser}>Search User</button>
      </form>
    );
  }
}

export default Form;
