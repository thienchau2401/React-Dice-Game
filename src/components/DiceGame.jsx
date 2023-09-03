import React, { Component } from 'react'
import Body from './Body';
import Result from './Result';

export default class DiceGame extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url("./img/bgGame.png")`, height: `100vh` }}>
        <h1 className='text-center pt-5'>GAME ĐỔ XÚC SẮC</h1>
        <Body />
        <Result />
      </div>
    );
  }
}
