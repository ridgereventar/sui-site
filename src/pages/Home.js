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

const axios = require('axios').default;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            sliderIsOpen: false,
            themes: []
        }
    }

    componentDidMount() {
        axios.get(`/api/user/${localStorage.getItem("userId")}`).then((user) => {
            this.setState({
                themes: user.data.themes
            })
        })
    }
    
    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    handleCreate = () => {
        this.setState({modalIsOpen: true});
    }

    closeSlider = () => {
        this.setState({sliderIsOpen: false})
    }

    openSlider = () => {
        this.setState({sliderIsOpen: true})
    }

    logout = () => {
        localStorage.removeItem('userId');
        this.props.history.push('/landing'); 
    }

    render() {
        return (
            <div className="home-wrapper">

                <Modal 
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={
                        {
                            content: {
                                height: '350px',
                                width: '650px',
                                borderRadius: '5px',
                                border: 'none',
                                backgroundColor: '#1F1F1F',
                                position: 'absolute',
                                top: '0',
                                bottom: '0',
                                right: '0',
                                left: '0',
                                margin: 'auto'
                            }
                        }
                    }
                    >
                    <h2 className="modal-title">Create New</h2>
                    <div className="create-form-container">
                        <CreateForm
                            _id={this.props._id}
                            name={this.props.name}/>
                    </div>
                </Modal>

                <ModalSlider
                    isOpen={this.state.sliderIsOpen}
                    directionFrom={'right'}
                    onRequestClose={this.closeSlider}
                    setAppElement={'#root'}
                    width={'250px'}
                    className={'modal-slider'}
                    overlayClassName={'modal-slider-overlay'}>
                        <AccountSlider/>
                </ModalSlider>

                <div className="landing-header">
                    <div className="landing-logo"></div>
                    <div className="account-header-container">
                        {/* <button onClick={this.logout}>Logout</button> */}
                        <span className="account-name">{this.props.name}</span>
                        <div className="profile-icon" onClick={this.openSlider}/>
                    </div>
                </div>
                {/* <img src="/image/2c4f00551063c8805f3bc6edb26912fd.png" alt="" width="99" height="99"></img> */}
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
                        <div id="create-btn" className="icon-btn" onClick={this.handleCreate}>
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
      mapValueToProps: (value) => ({_id: value._id, name: value.name, email: value.email, themes: value.themes, logout: value.logout})
    }
  )(Home);