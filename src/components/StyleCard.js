import React, {Component} from 'react';

import '../styles/StyleCard.css';

import MiniColorDisplay from './MiniColorDisplay';
import MiniFontDisplay from './MiniFontDisplay';

import imgPlaceHolder from '../images/imgplaceholder.png'
import uisample from '../images/uisample.png';
import { withRouter } from 'react-router-dom';

const axios = require('axios').default;

class StyleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: this.props.themeId,
            themeName: "",
            creator: "",
            privacy: "",
            theme: {
                colors: [
                    {
                        type: "Primary", 
                        hex: "", 
                        rgb: "",
                        swatch: []
                    }, 
                    {
                        type: "Secondary", 
                        hex: "", 
                        rgb: "",
                        swatch: []
                    }, 
                    {
                        type: "Tertiary", 
                        hex: "", 
                        rgb: "",
                        swatch: []
                    } 
                ],
                fonts: [
                    {
                        type: "Primary", 
                        name: "", 
                        url: "",
                        weights: []
                    },
                    {
                        type: "Secondary", 
                        name: "", 
                        url: "",
                        weights: []
                    }
                ]
            },
            imageId: ""
        }
    }

    componentDidMount() {
        axios.get(`api/theme/${this.props.themeId}`).then((theme) => {
            this.setState({
                themeName: theme.data.themeName,
                creator: theme.data.creator,
                privacy: theme.data.privacy,
                theme: theme.data.theme,
                imageId: theme.data.imageId
            });
        }).catch(error => {
            console.log(error);
        })
    }

    handleClick = () => {
        this.props.history.push(`/create?id=${this.props.themeId}`);
    }


    render() {
        return (
            <div className="style-card-wrapper">
                <div 
                    className="style-card-container" 
                    style={{backgroundImage: `url(${this.state.imageId ?  `/image/${this.state.imageId})` : imgPlaceHolder}`}} 
                    onClick={this.handleClick}>
                    
                    <div className="style-guide-preview">
                        {this.state.theme.colors.map((color, index) => {
                            return (
                                <MiniColorDisplay key={index} color={color}/>
                            )
                        })}

                        {this.state.theme.fonts.map((font, index) => {
                            return (
                                <MiniFontDisplay key={index} font={font}/>
                            )
                        })}

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

export default withRouter(StyleCard);