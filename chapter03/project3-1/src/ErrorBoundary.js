import React from "react";
export default class ErrorBoundary extends React.Component {
  state = { error: null };
  componentDidCatch(error, info) {
    console.log("error!!!");
  }
  render() {
    const { error } = this.state;
    if (error) {
      return <h1>Something went wrong.</h1>;
    } else {
      return this.props.children;
    }
  }
}
