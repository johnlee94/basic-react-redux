import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CommentBox from './components/CommentBox';
import CommentsList from './components/CommentsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentBox />
        <CommentsList />
      </div>
    );
  }
}

export default App;
