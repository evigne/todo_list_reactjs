import React from "react";

function About() {
  return (
    <React.Fragment>
      {/*<React.Fragment> if we dont need a element in the dom in div -- its a ghost element doesnt show in DOM */}
      <h1>About</h1>
      <p>This is ToDoList app v1.0.0 It is part of React Crash Course</p>
    </React.Fragment>
  );
}

export default About;
