import React, { Component } from 'react'
import DiceSelection from './DiceSelection'
import ListDices from './ListDices'

export default class Body extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <DiceSelection choice={'TÀI'}/>
        <ListDices />
        
        <DiceSelection  choice={'XỈU'}/>
      </div>
    )
  }
}
