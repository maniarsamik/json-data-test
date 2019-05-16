import React, { Component } from 'react';
import PostList from './posts/PostList.js';
import Testsam1 from './components/testsam1.js';
import Testsam2 from './components/testsam2.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostList/>
        <Testsam1 name={"Max"} age={27}/>
        <Testsam2/>
      </div>
    );
  }
}

export default App;
