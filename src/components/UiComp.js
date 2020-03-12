import React, {Component} from 'react'; 
import '../styles/create/UiComp.css'; 
import SectionLabel from './SectionLabel';

import uicompIcon from '../images/uicompicon.png';
import Button from '../ui/Button/Button';

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

                <div className="ui-panel">
                    <div className="tab-container">
                        <div className="input-nav-container">
                            <span className="tab-label">Input / Navigation</span>
                        </div>
                        <div className="typ-container">
                            <span className="tab-label"> Typography </span>
                        </div>
                    </div>
                    <Button
                        btnRoundness="large"
                        />

                </div>
                {/* <div className="settings-panel ui-panel">
  
                </div> */}
            </div>
        );
    }
}

export default UiComp;