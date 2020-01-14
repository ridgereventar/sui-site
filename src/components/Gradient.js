import React, { Component } from 'react';
import '../App.css';

class Gradient extends Component {

  // constructor(props) {
  //   super(props);
  // }


  render() {
    console.log(this.props.gradient);
    return (
      <div className="gradient-container">
        {this.props.gradient.map(value => {
          return(
            <div className="gradient-square" style={{backgroundColor: `${value}`}}></div>
          )
        })}
      </div>
    );
  }
}


export default Gradient;