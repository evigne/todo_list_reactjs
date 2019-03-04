import React, { Component } from "react"; //import React from 'react';
import TodoItem from "./TodoItem";
import PropTypes from "prop-types"; // validation for property that the component should have

class Todos extends Component {
  render() {
    // console.log("this todo passed as a prob", this.props.todo);
    return this.props.todo.map(x => (
      <TodoItem
        key={x.id}
        todoitem={x}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

Todos.propTypes = {
  todo: PropTypes.array.isRequired
};

export default Todos;
