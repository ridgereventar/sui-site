import React, { useContext, useState} from 'react';
import Modal from 'react-modal';

import '../styles/create/Create.css';

import cx from 'classnames';

import Settings from '../components/Settings';
import Styleguide from '../components/Styleguide';
import UiComp from '../components/UiComp';

import ThemeContext, {ThemeContextProvider} from '../contexts/ThemeContext';
import {FontContextProvider} from '../contexts/FontContext';
import {ColorContextProvider} from '../contexts/ColorContext';
import SettingsForm from '../components/SettingsForm';

Modal.setAppElement('#root');

const Create = () => {
    const {themeName, isSaving} = useContext(ThemeContext);
    const {didUpdate} = useContext(ThemeContext);

    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);

    const toggle = () => {
        if(height === 0) {
            setHeight('auto');
        } else {
            setHeight(0);
        }
    }
    const openModal = () => {
        toggle();
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div className="create-container">
            <div className="create-header">
                <div className="header-sect1">
                    <div className="create-header-icon"></div>
                </div>
                <div className="header-sect2">
                    <span className="theme-name" onClick={openModal}>{themeName}</span>
                    <div id="gear-icon" className="settings-btn" onClick={openModal}></div>
                </div>
                <div className="header-sect3">
                    <span className={cx(
                        "auto-save", {
                            ['is-saving']: isSaving,
                            ['is-exiting']: !isSaving
                        })}
                        >Auto saving...
                    </span>
                    <div className="profile-icon-create"></div>
                </div>
            </div>

            <div className="playground-window">

                <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={
                    {  
                        overlay: {
                            backgroundColor: 'none'
                        },
                        content: {
                            height: '390px',
                            width: '600px',
                            borderRadius: '0px 0px 15px 15px',
                            border: 'none',
                            backgroundColor: '#1F1F1F',
                            margin: '0 auto',
                            marginTop: '5px'
            
                        }
                    }
                }
                >
                    <h3 className="modal-title">Theme Settings</h3>
                    <div className="settings-form-container">
                        <SettingsForm onSubmit={closeModal}/> 
                    </div>
                </Modal>
                <Settings/>
                <Styleguide/>
                <UiComp/>
            </div>
        </div>
    );
}

const CeateContainer = (props) => {
    return (
        <ThemeContextProvider>
            <FontContextProvider>
                <ColorContextProvider>
                    <Create/>
                </ColorContextProvider>
            </FontContextProvider>
        </ThemeContextProvider>
    )
}

export default CeateContainer;
  