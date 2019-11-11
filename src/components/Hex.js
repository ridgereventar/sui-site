import React, { Component } from 'react';
import '../App.css';

class Hex extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hexContainer">
        <div className="color-container" id="color1" style={{backgroundColor: `${this.props.color}`}}></div>
        <p>Primary</p>
      </div>
    );
  }
}

export default Hex;
