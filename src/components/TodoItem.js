import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  //   getStyle = () => {
  //     if (this.props.todoitem.completed) {
  //       return {
  //         textDecoration: "line-through"
  //       };
  //     } else {
  //       return {
  //         textDecoration: "none"
  //       };
  //     }
  //   };
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todoitem.completed ? "line-through" : "none"
    };
  };
  //   markComplete(e) {
  //     console.log(this.props);
  //   }

  //   markComplete = e => {
  //     console.log(this.props);
  //   };

  render() {
    //     return (
    //       //if we use inline style we use {{}}
    //       //   <div style={{ backgroundColor: "#f4f4f4" }}>
    //       //   <div style={itemStyle}>
    //       <div style={this.getStyle()}>
    //         <p>
    //           {/* <input type="checkbox" onChange={this.markComplete.bind(this)} />  if we dont use arrow function */}
    //           <input
    //             type="checkbox"
    //             onChange={this.props.markComplete.bind(this, this.props.toditem.id)}
    //           />{" "}
    //           {this.props.todoitem.title}
    //         </p>
    //       </div>
    //     );
    //   }
    // }
    const { id, title } = this.props.todoitem;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
        </p>
      </div>
    );
  }
}

TodoItem.propType = {
  toditem: PropTypes.object.isRequired
};

// const itemStyle = {
//   backgroundColor: "#f4f4f4"
// };

export default TodoItem;