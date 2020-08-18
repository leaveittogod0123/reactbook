import React from "react";
// export default class MyComponent extends React.Component {
//   color = "red";
//   onClick = () => {
//     this.color = "blue";
//   };
//   render() {
//     return (
//       <button style={{ backgroundColor: this.color }} onClick={this.onClick}>
//         좋아요
//       </button>
//     );
//   }
// }

export default class MyComponent extends React.Component {
  state = { color: "red" };
  onClick = () => {
    console.log("클릭!", this.state);
    this.setState({ color: "blue" });
  };
  render() {
    return (
      <button
        style={{ backgroundColor: this.state.color }}
        onClick={this.onClick}
      >
        좋아요
      </button>
    );
  }
}
