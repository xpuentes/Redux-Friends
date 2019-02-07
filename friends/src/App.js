import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import Form from './components/Form';

import { connect } from 'react-redux';
import { getFriends } from './actions/actions';

class App extends Component {
  componentDidMount(){
    this.props.getFriends();
    console.log(this.props.friends)
  };

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.props.friends}/>
        <Form />
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    friends: state.friends
  }
}

export default connect(mstp, { getFriends: getFriends })(App);
