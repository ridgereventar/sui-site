import React, {Component} from 'react';

import Modal from 'react-modal';
import ModalSlider from 'react-modal-slider';
import 'react-modal-slider/lib/main.css';

import '../styles/Home.css';
import withContext from '../helpers/withContext';
import UserContext from '../contexts/UserContext';

import StyleCard from '../components/StyleCard';
import CreateForm from '../components/CreateForm';
import AccountSlider from '../components/AccountSlider';
import {createModalStyles} from '../helpers/constants';

const axios = require('axios').default;

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            createModalOpen: false,     // handles create modal open/close
            accountModalOpen: false,    // handles account modal open/close
            themes: []                  // stores users themeId array when mounted
        }
    }

    componentDidMount() {
        // When the Home component mounts after a login or signup we use the userId from localStorage to get the users theme array from the database.
        axios.get(`/api/user/${localStorage.getItem("userId")}`).then((user) => {
            this.setState({themes: user.data.themes});
        })
    }
    
    openCreateModal = () => {
        this.setState({createModalOpen: true});
    }

    closeCreateModal = () => {
        this.setState({createModalOpen: false});
    }

    openAccountModal = () => {
        this.setState({accountModalOpen: true})
    }

    closeAccountModal = () => {
        this.setState({accountModalOpen: false})
    }

    render() {
        return (
            <div className="home-wrapper">

                <Modal 
                    isOpen={this.state.createModalOpen}
                    onRequestClose={this.closeCreateModal}
                    style={createModalStyles}>
                        <h2 className="modal-title">Create New</h2>
                        <div className="create-form-container">
                            <CreateForm
                                _id={this.props._id}
                                name={this.props.name}/>
                        </div>
                </Modal>

                <ModalSlider
                    isOpen={this.state.accountModalOpen}
                    directionFrom={'right'}
                    onRequestClose={this.closeAccountModal}
                    setAppElement={'#root'}
                    width={'250px'}
                    className={'modal-slider'}
                    overlayClassName={'modal-slider-overlay'}>
                        <AccountSlider/>
                </ModalSlider>

                <div className="landing-header">
                    <div className="landing-logo"></div>
                    <div className="account-header-container">
                        <span className="account-name">{this.props.name}</span>
                        <div className="profile-icon" onClick={this.openAccountModal}/>
                    </div>
                </div>
                <div className="home-container">
                    <div className="mystyles-container">
                        <h1 className="bold-title">My Styles</h1>
                        <span className="small-text">Recent</span>
                        <div className="style-swipe">
                            {this.state.themes.map(theme => {
                                return(
                                    <StyleCard
                                        key={theme}
                                        themeId={theme}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className="home-icon-container">
                        <div id="explore-btn" className="icon-btn">
                            <h1>Explore</h1>
                        </div>
                        <div id="create-btn" className="icon-btn" onClick={this.openCreateModal}>
                            <h1>Create</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }  
}

export default withContext(
    {
      context: UserContext,
      mapValueToProps: (value) => ({_id: value._id, name: value.name})
    }
)(Home);