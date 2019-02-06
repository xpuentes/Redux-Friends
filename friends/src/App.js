import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
  componentDidMount(){

  };

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    state
  }
}

export default connect(mstp, {})(App);
