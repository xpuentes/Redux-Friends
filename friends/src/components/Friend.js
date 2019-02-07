import React from 'react';
import styled from 'styled-components';

const Name = styled.div`
  width: 200px;
  height: 30px;
  border: 1px solid black;
`
const InfoCard = styled.div`
  width: 200px;
  height: 150px;
  border: 1px solid red;
`

class Friend extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      infoCardToggle: false
    }
  }

  openCard = () => {
    this.setState({infoCardToggle: !this.state.infoCardToggle});
  };

  render(){
    return (
      <div>
        <Name onClick={this.openCard}>NAME</Name>
        { this.state.infoCardToggle ? <InfoCard>INFO</InfoCard> : null }
      </div>
    );
  }
}

export default Friend;
