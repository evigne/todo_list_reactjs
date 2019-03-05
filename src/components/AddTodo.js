import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };
  onChangeFunc = e => this.setState({ title: e.target.value }); //this.setState({[e.target.name]:e.target.value}) for multiple parms like name, email, phone
  onSubmitFunc = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  }; // prevent submit to the default file
  render() {
    return (
      <form onSubmit={this.onSubmitFunc} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add ToDo..."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChangeFunc}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: "5" }}
        />
      </form>
    );
  }
}

export default AddTodo;
