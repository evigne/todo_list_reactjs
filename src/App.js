import React, { Component } from "react"; //import React from 'react';
import Todos from "./components/Todos";
import "./App.css";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
// import uuid from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import axios from "axios";

class App extends Component {
  // class App extends React.component
  state = {
    todos: []
    // todos: [
    //   {
    //     id: uuid.v4(),
    //     title: "Take out the trash",
    //     completed: false
    //   },
    //   {
    //     id: uuid.v4(),
    //     title: "Prepare Dinner",
    //     completed: false
    //   },
    //   {
    //     id: uuid.v4(),
    //     title: "Watch Movie",
    //     completed: false
    //   }
    // ]
  };
  //component did mount life cycle method run after all component mounted
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }

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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
    // this.setState({
    //   todos: [...this.state.todos.filter(todo => todo.id !== id)]
    // });
  };

  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));

    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // };
    // this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
    //life cycle method used to render the component in the browser
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todo={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />{" "}
            {/* render(life cycle method ) for morethan one component*/}
            <Route path="/about" component={About} />{" "}
            {/* for single component */}
          </div>

          {/* Just bringing Todos component custom html tag*/}
        </div>
      </Router>
    );
  }
}

export default App;
