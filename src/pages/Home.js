import React, {Component} from 'react';
import Modal from 'react-modal';

import '../styles/Home.css';
import withContext from '../helpers/withContext';
import UserContext from '../contexts/UserContext';

import StyleCard from '../components/StyleCard';
import CreateForm from '../components/CreateForm';

Modal.setAppElement('#root');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        }
    }
    
    closeModal = () => {
        this.setState({modalIsOpen: false});

    }

    handleCreate = () => {
        this.setState({modalIsOpen: true});
    }

    logout = () => {
        localStorage.removeItem('userId');
        this.props.history.push('/landing'); 
    }

    handleClick = () => {
        console.log("click!");
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
                                height: '500px',
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
                    <CreateForm
                        name={this.props.name}/>
                    
                </Modal>

                <div className="landing-header">
                    <div className="landing-logo"></div>
                    <div className="account-header-container">
                        <button onClick={this.logout}>Logout</button>
                        <span className="account-name">{this.props.name}</span>
                        <div className="profile-icon"/>
                    </div>
                </div>
                <div className="home-container">
                    <div className="mystyles-container">
                        <h1 className="bold-title">My Styles</h1>
                        <span className="small-text">Recent</span>
                        <div className="style-swipe">
                            {this.props.themes.map(theme => {
                                return(
                                    <StyleCard
                                        themeId={theme}
                                        onClick={this.handleClick}/>
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
      mapValueToProps: (value) => ({name: value.name, email: value.email, themes: value.themes, logout: value.logout})
    }
  )(Home);