import React, { Component } from 'react'

export default class Dice extends Component {
  render() {
    const {diceValue} = this.props;
    return (
      <div className='mx-1'>
        <img src={`./img/${diceValue}.png`} width={40} height={40}  alt=''/>
      </div>
    )
  }
}
