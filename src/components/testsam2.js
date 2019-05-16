import React, { Component } from 'react';


class Testsam2 extends Component {
    state = {
        testname: "Samik",
        testage: "35",
    };
  render() {
    return( 
      <div className="container">
        <p>My name is {this.state.testname}, your age is {this.state.testage}</p>
      </div>);
  }
}

export default Testsam2;
