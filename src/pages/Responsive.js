import React, { Component, useContext } from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import '../styles/Responsive.css';

class Responsive extends Component {

    // constructor(props) {
    //     super(props);
    // }


    render() {

        return (
            <React.Fragment>
              <div className="resp-banner"></div>
              <div className="responsive-wrapper">
                <article class="img-info">
                  <h2>Yay!</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                </article>
                <div className="resp-img"></div>

              </div>


            </React.Fragment>
        );
    }
}

export default Responsive;