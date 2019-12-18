import React from "react";

type TestCompProps = {
  name: string;
};

// const TestComp: React.FC<TestCompProps> = ({ name }) => {
//   return <div>Hi, {name}</div>;
// };

// const TestComp = ({ name }: TestCompProps) => {
//   return <div>Hi, {name}</div>;
// };

type TestCompState = {
  isCool: boolean;
  attitude: string;
};

class TestComp extends React.Component<{ name: string }, TestCompState> {
  state = {
    isCool: true,
    attitude: "hi"
  };
  render() {
    return <div>Hi, {this.props.name}</div>;
  }
}

export default TestComp;
