import React from "react";
const UserContext = React.createContext({
  username: "unknown",
  helloCount: 0,
  onHello: () => {},
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "mike",
      helloCount: 0,
      onHello: this.onHello,
    };
  }

  onHello = () => {
    const { helloCount } = this.state;
    this.setState({ helloCount: helloCount + 1 });
  };

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <div>상단 메뉴</div>
          <Profile />
          <div>하단 메뉴</div>
        </UserContext.Provider>
      </div>
    );
  }
}

function Greeting() {
  return (
    <UserContext.Consumer>
      {(value) => (
        <React.Fragment>
          <p>{`${value.username}님 안녕하세요.`}</p>
          <p>{`인사 횟수: ${value.helloCount}`}</p>
          <button onClick={value.onHello}>인사하기</button>
        </React.Fragment>
      )}
    </UserContext.Consumer>
  );
}

function Profile() {
  return (
    <div>
      <Greeting />
    </div>
  );
}
