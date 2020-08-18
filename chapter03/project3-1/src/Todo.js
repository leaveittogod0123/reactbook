import React from "react";

export default class Todo extends React.Component {
  state = { count: 0 };
  onClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <>
        <MemodTitle title={`현재 카운트: ${count}`} />
        <button onClick={this.onClick}>증가</button>
      </>
    );
  }
}

function Title(props) {
  return <p>{props.title}</p>;
}

export const MemodTitle = React.memo(Title);
