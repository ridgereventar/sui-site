import React, {Component} from 'react'; 
import '../styles/create/UiComp.css'; 
import SectionLabel from './SectionLabel';

import uicompIcon from '../images/uicompicon.png';
import Button from '../ui/Button';
import { createPortal } from 'react-dom';

import cx from 'classnames';

class UiComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter: 0,
            primarySelected: true, 
            secondarySelected: false, 
            tertiarySelected: false
        }
    }

    handleFilter = (event) => {
        let filterSelected = event.target.innerHTML;
        
        if(filterSelected == "Primary") {
            this.setState({
                filter: 0,
                primarySelected: true, 
                secondarySelected: false, 
                tertiarySelected: false
            })
        } else if (filterSelected == "Secondary") {
            this.setState({
                filter: 1,
                primarySelected: false, 
                secondarySelected: true, 
                tertiarySelected: false
            })
        } else if (filterSelected == "Tertiary") {
            this.setState({
                filter: 2,
                primarySelected: false, 
                secondarySelected: false, 
                tertiarySelected: true
            })
        }
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
                    <div className="filter-wrapper">
                        <div className="filter-container">
                            <div 
                                id="primary-filter" 
                                className={cx(
                                    "filter-btn",
                                     {
                                         ["selected-filter"]: this.state.primarySelected
                                     }
                                )}
                                onClick={this.handleFilter}>Primary</div>
                            <div 
                                id="secondary-filter" 
                                className={cx(
                                    "filter-btn",
                                    {
                                        ["selected-filter"]: this.state.secondarySelected
                                    } 
                                )}
                                onClick={this.handleFilter}>Secondary</div>
                            <div 
                                id="tertiary-filter" 
                                className={cx(
                                    "filter-btn",
                                    {
                                        ["selected-filter"]: this.state.tertiarySelected
                                    } 
                                )}
                                onClick={this.handleFilter}>Tertiary</div>
                        </div>
                    </div>
                    <div className="component-containter">
                        <span className="component-label">Buttons</span>
                        <div className="component-section">
                            <Button
                                filter={this.state.filter}
                                border={true}
                                fill={false}
                                roundness="none"/>
                            <Button
                                filter={this.state.filter}
                                border={true}
                                fill={false}
                                roundness="small"/>
                            <Button
                                filter={this.state.filter}
                                border={true}
                                fill={false}
                                roundness="large"/>
                        </div>
                        <div className="component-section">
                            <Button
                                filter={this.state.filter}
                                border={false}
                                fill={true}
                                roundness="none"/>
                            <Button
                                filter={this.state.filter}
                                border={false}
                                fill={true}
                                roundness="small"/>
                            <Button
                                filter={this.state.filter}
                                border={false}
                                fill={true}
                                roundness="large"/>
                        </div>
                        
                    </div>
                    
                    

                </div>
                {/* <div className="settings-panel ui-panel">
  
                </div> */}
            </div>
        );
    }
}

export default UiComp;