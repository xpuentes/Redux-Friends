import React from 'react';
import styled from 'styled-components';
import Friend from './Friend'

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => <Friend friend={friend} deleteFriend={props.deleteFriend}/>)}
    </div>
  );
}

export default FriendsList;
