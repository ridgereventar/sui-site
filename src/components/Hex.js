import React, { Component } from 'react';
import '../App.css';

class Hex extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="hex-container">
        <p className="hex-type-label"> {this.props.type} </p>
        <div className="color-container" id="color1" style={{backgroundColor: `${this.props.color}`}}></div>
      </div>
    );
  }
}


export default Hex;
