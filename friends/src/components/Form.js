import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Form extends React.Component {
  constructor(){
    super();
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

  render(){
    return (
      <div>
        <form>
          <input onChange={this.changeHandler} placeholder='Name' name='name' value={this.state.friend.name} />
          <input onChange={this.changeHandler} placeholder='Age' name='age' value={this.state.friend.age} />
          <input onChange={this.changeHandler} placeholder='Email' name='email' value={this.state.friend.email} />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default Form;
