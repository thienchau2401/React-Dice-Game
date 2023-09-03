import React, { Component } from 'react'
import Dice from './Dice'
import { connect } from 'react-redux';

class ListDices extends Component {
  render() {
    let {rolled} = this.props.stateDice;
    return (
      <div className='d-flex'>
        <Dice diceValue = {rolled[0]}/>
        <Dice diceValue = {rolled[1]}/>
        <Dice diceValue = {rolled[2]}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { stateDice : state.DiceReducer };
}
export default connect(mapStateToProps,null)(ListDices);