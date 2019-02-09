import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class PutForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      friend: {
        name: '',
        email: '',
        age: ''
      },
      id: '1'
    }
  }

  changeHandler = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name] : e.target.value
      }
    })
  }

  selectChangeHandler = e => {
    this.setState({
      id: e.target.value
    });
    console.log(this.state)
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.updateFriend(this.state.friend, this.state.id);
    this.setState({
      friend: {
        name: '',
        email: '',
        age: ''
      }
    })
  }

  render(){
    return (
      <div>
        <h1>UPDATE FRIEND</h1>
        <form onSubmit={this.submitHandler}>
          <select onChange={this.selectChangeHandler} value={this.state.id}>
            {this.props.friends.map(friend => <option value={friend.id}>{friend.name}</option>)}
          </select>
          <input onChange={this.changeHandler} placeholder='Name' name='name' value={this.state.friend.name} />
          <input onChange={this.changeHandler} placeholder='Age' name='age' value={this.state.friend.age} />
          <input onChange={this.changeHandler} placeholder='Email' name='email' value={this.state.friend.email} />
          <button type='submit'>Update</button>
        </form>
      </div>
    );
  }
}

export default PutForm;
