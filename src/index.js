import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import './styles/index.css';
import App from './App';
import Lottie from 'lottie-web';

ReactDOM.render(<App />, document.getElementById('root'));

$(document).ready(function() {
    // Lottie.loadAnimation({
    //     container: document.getElementById('anim-container'),
    //     renderer: 'svg',
    //     loop: true,
    //     autoplay: true, 
    //     path: './helpers/suiAnim.json'
    // })
});
