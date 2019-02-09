import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import PostForm from './components/PostForm';
import PutForm from './components/PutForm';

import { connect } from 'react-redux';
import { getFriends, addFriend, deleteFriend, updateFriend } from './actions/actions';

class App extends Component {
  componentDidMount(){
    this.props.getFriends();
    console.log(this.props.friends)
  };

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.props.friends} deleteFriend={this.props.deleteFriend}/>
        <PostForm addFriend={this.props.addFriend} />
        <PutForm updateFriend={this.props.updateFriend} friends={this.props.friends}/>
      </div>
    );
  }
}

const mstp = (state) => {
  return {
    friends: state.friends
  }
}

export default connect(mstp, { getFriends: getFriends, addFriend: addFriend, deleteFriend: deleteFriend, updateFriend: updateFriend })(App);
