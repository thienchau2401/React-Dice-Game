import React, { Component } from 'react'
import { connect } from 'react-redux';

class DiceSelection extends Component {
  render() {
    return (
      <div className='mx-5'>
        <button className='btn btn-primary border border-success ' style={{width:'120px', height:'120px'}} onClick={() => this.props.choose(this.props.choice)}>{this.props.choice}</button>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
      choose: (choice) => {
          dispatch({
              type:'CHON_TAI_XIU',
              myChoice:(choice === 'TÀI')?true:false,
          });
      }
  }
}

export default connect(null,mapDispatchToProps)(DiceSelection);