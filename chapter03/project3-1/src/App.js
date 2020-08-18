import React from "react";
import "./App.css";
import MyComponent from "./Mycomponent.js";
import Todo from "./Todo";
import ErrorBoundary from "./ErrorBoundary";
import Counter from "./Count";

function App() {
  return (
    // <div className="App">
    //   <MyComponent />
    //   <Todo />
    // </div>
    <ErrorBoundary>
      <Counter />
    </ErrorBoundary>
  );
}

export default App;
