import React, { Component } from "react"; //import React from 'react';
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  // class App extends React.component
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Prepare Dinner",
        completed: false
      },
      {
        id: 3,
        title: "Watch Movie",
        completed: false
      }
    ]
  };
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  render() {
    //life cycle method used to render the component in the browser
    return (
      <div className="App">
        <Todos todo={this.state.todos} markComplete={this.markComplete} />
        {/* Just bringing Todos component custom html tag*/}
      </div>
    );
  }
}

export default App;
