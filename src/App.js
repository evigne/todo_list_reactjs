import React, { Component } from "react"; //import React from 'react';
import Todos from "./components/Todos";
import "./App.css";
import Header from "./components/layout/Header";

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

  //toggle complete
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

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
  render() {
    //life cycle method used to render the component in the browser
    return (
      <div className="App">
        <Header />
        <Todos
          todo={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
        {/* Just bringing Todos component custom html tag*/}
      </div>
    );
  }
}

export default App;
