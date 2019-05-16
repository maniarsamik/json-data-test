import React, { Component } from 'react';


class Testsam1 extends Component {
  render() {
    return (
      <div className="container">
        <p>Your name is {this.props.name}, your age is {this.props.age}</p>
      </div>
    );
  }
}

export default Testsam1;
