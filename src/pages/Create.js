import React, { useContext, useState} from 'react';
import '../styles/Create.css';

import cx from 'classnames';

import Modal from 'react-modal';
import Settings from '../components/Settings';
import Styleguide from '../components/Styleguide';
import UiComp from '../components/UiComp';
import SettingsForm from '../components/SettingsForm';

import ThemeContext, {ThemeContextProvider} from '../contexts/ThemeContext';
import {FontContextProvider} from '../contexts/FontContext';
import {ColorContextProvider} from '../contexts/ColorContext';
import {modalStyles} from '../helpers/constants';

Modal.setAppElement('#root');

const Create = () => {
    
    // consumes ThemeContext to get themeName and isSaving boolean. 
    // if isSaving is true, attach class to span element using 'classnames' library.
    const {themeName, isSaving} = useContext(ThemeContext);
    
    // Toggle theme settings modal
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
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
                style={modalStyles}>
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

// By wrapping the create page in all 3 context's, the components within it are able to consume the values they need. 
// ThemeContext also wraps the Font & Color context's since these are extensions of the font and color objects in the ThemeContext.
// This means that the Font & Color context's contain methods to update the main ThemeContext's values. 
// (see Font and Color Context's for more detail) 
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
  