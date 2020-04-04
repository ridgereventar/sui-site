import React from 'react';
import {withRouter} from 'react-router-dom';

import '../styles/Home.css';

const AccountSlider = (props) => {


    const logout = () => {
        localStorage.removeItem('userId');
        props.history.push('/landing'); 
    }

    return (
        <React.Fragment>
            <div className="account-option" onClick={logout}>Logout</div>
            <div className="option-divider"></div>
            <div className="account-option">Settings</div>
        </React.Fragment>
    )
}

export default withRouter(AccountSlider);