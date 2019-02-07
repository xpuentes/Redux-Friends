import React, { Component } from 'react';
import './App.css';
import Friend from './components/Friend';

import { connect } from 'react-redux';
import { getFriends } from './actions/actions';

class App extends Component {
  componentDidMount(){
    this.props.getFriends();
  };

  render() {
    return (
      <div className="App">
        <Friend />
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    state
  }
}

export default connect(mstp, { getFriends: getFriends })(App);
