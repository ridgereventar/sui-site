import React, {Component} from 'react';
import '../styles/StyleCard.css';

import MiniColorDisplay from './MiniColorDisplay';
import MiniFontDisplay from './MiniFontDisplay';

import uisample from '../images/uisample.png';

class StyleCard extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="style-card-wrapper">
                <div className="style-card-container" style={{"background-image": `url(${uisample})`}}>
                    
                    <div className="style-guide-preview">
                        <MiniColorDisplay/>
                        <MiniColorDisplay/>
                        <MiniColorDisplay/>
                        <MiniFontDisplay/>
                        <MiniFontDisplay/>

                    </div>
                
                </div>     
                <div className="info-slide-out-container">
                    <div className="info-slide-out">
                        <span className="card-name">SUi - Style Guide Creator</span>
                        <div className="like-btn">
                            <div className="heart"></div>
                            <span className="like-label">Like</span>
                        </div>
                    </div>
                </div>            
            </div>

        );
    }
}

export default StyleCard;