import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      friend: {
        name: '',
        email: '',
        age: ''
      }
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

  submitHandler = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend);
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
        <h1>ADD FRIEND</h1>
        <form onSubmit={this.submitHandler}>
          <input onChange={this.changeHandler} placeholder='Name' name='name' value={this.state.friend.name} />
          <input onChange={this.changeHandler} placeholder='Age' name='age' value={this.state.friend.age} />
          <input onChange={this.changeHandler} placeholder='Email' name='email' value={this.state.friend.email} />
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
