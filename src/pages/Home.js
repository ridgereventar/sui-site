import React, {Component} from 'react';

import '../styles/Home.css';

import StyleCard from '../components/StyleCard';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <div className="home-wrapper">
                <div className="landing-header">
                    <div className="landing-logo"></div>
                    <div className="account-header-container">
                        <span className="account-name">Ridge Reventar</span>
                        <div className="profile-icon"/>
                    </div>
                </div>
                <div className="home-container">
                    <div className="mystyles-container">
                        <h1 className="bold-title">My Styles</h1>
                        <span className="small-text">Recent</span>
                        <div className="style-swipe">
                            <StyleCard/>
                            <StyleCard/>
                            <StyleCard/>
                            <StyleCard/>
                            <StyleCard/>
                            <StyleCard/>
                        </div>
                    </div>
                    <div className="home-icon-container">
                        <div id="explore-btn" className="icon-btn">
                            <h1>Explore</h1>
                        </div>
                        <div id="create-btn" className="icon-btn">
                            <h1>Create</h1>
                        </div>
                    </div>
                </div>
            </div>



        );
    }  
}

export default Home;