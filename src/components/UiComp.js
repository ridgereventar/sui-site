import React, {Component} from 'react'; 
import '../styles/create/UiComp.css'; 
import SectionLabel from './SectionLabel';

import uicompIcon from '../images/uicompicon.png';

class UiComp extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="ui-comp-container">
                <SectionLabel
                    url={uicompIcon}
                    label="Ui Components"/>

                <div className="settings-panel ui-panel">

                </div>
            </div>
        );
    }
}

export default UiComp;