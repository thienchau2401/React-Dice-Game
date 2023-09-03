import React, { Component } from 'react'
import { connect } from 'react-redux';

class Result extends Component {

  render() {
    let {stateDice} = this.props;
    //console.log(stateDice.showResult);
    return (
      <div className='text-center'>
        <h1>BẠN CHỌN :<span>{stateDice.myChoice === true ? 'TÀI':'XỈU'}</span></h1>
        {stateDice.showResult && <h2 className='text-danger'>{stateDice.result?'YOU WON':'YOU LOST'}</h2>}
        <h2>Số lần thắng : {stateDice.totalWin}</h2>
        <h2>Tổng số bàn chơi :{stateDice.totalGame}</h2>
        <button className='btn btn-warning' onClick={() => this.props.startGame()}>Roll</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return { stateDice : state.DiceReducer };
}

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => {
            dispatch({
                type:'BAT_DAU',
            });
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Result);