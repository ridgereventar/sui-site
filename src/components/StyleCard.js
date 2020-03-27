import React, {Component} from 'react';
import '../styles/StyleCard.css';

import MiniColorDisplay from './MiniColorDisplay';
import MiniFontDisplay from './MiniFontDisplay';

import uisample from '../images/uisample.png';
const axios = require('axios').default;

class StyleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themeName: "",
            creator: "",
            colors: [], 
            fonts: []
        }
    }

    componentDidMount() {
        axios.get(`api/theme/${this.props.themeId}`).then((theme) => {
            this.setState({
                themeName: theme.data.themeName,
                creator: theme.data.creator,
                colors: theme.data.theme.colors,
                fonts: theme.data.theme.fonts
            });
        }).catch(error => {
            console.log(error);
        })
    }
    
    render() {
        return (
            <div className="style-card-wrapper">
                <div className="style-card-container" style={{backgroundImage: `url(${uisample})`}}>
                    
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
                        <span className="card-name">{this.state.themeName}</span>
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