import React, {Component} from 'react';

import '../styles/StyleCard.css';

import MiniColorDisplay from './MiniColorDisplay';
import MiniFontDisplay from './MiniFontDisplay';

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
            theme: {}
        }
    }

    componentDidMount() {
        axios.get(`api/theme/${this.props.themeId}`).then((theme) => {
            this.setState({
                themeName: theme.data.themeName,
                creator: theme.data.creator,
                privacy: theme.data.privacy,
                theme: theme.data.theme
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
                <div className="style-card-container" style={{backgroundImage: `url(${uisample})`}} onClick={this.handleClick}>
                    
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

export default withRouter(StyleCard);