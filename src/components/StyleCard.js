import React, {Component} from 'react';
import '../styles/Home.css';

import uisample from '../images/uisample.png';
import MiniColorDisplay from './MiniColorDisplay';
import MiniFontDisplay from './MiniFontDisplay';

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
                    </div>
                </div>            
            </div>

        );
    }
}

export default StyleCard;