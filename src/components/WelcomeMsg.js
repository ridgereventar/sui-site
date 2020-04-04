import React from 'react';
import Fade from 'react-reveal/Fade';

import '../styles/Landing.css';

const WelcomeMsg = (props) => {
    return (
        <React.Fragment>
            <Fade left>
                <div className="welcome-box-wrapper">
                    <div className="welcome-box"></div>
                
                    <div className="welcome-info-container">
                        <span className="welcome-desc">A Style Guide &#38; Ui Component Generator</span>
                        <div className="play-btn">
                            <div className="play-icon"></div>
                            <span className="play-label"> See how it works</span>
                        </div>
                    </div>            
                </div>
            </Fade>
        </React.Fragment>

    )
}

export default WelcomeMsg;