import React, { Component } from "react"; //import React from 'react';
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  // class App extends React.component
  render() {
    //life cycle method used to render the component in the browser
    return (
      <div className="App">
        <h1>ToDo App</h1>
        <Todos /> {/* Just bringing Todos component*/}
      </div>
    );
  }
}

export default App;
