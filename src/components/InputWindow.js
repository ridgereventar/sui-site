import React, {Component} from 'react';
import '../styles/InputWindow.css'; 

import Button from '../ui/Button';
import InputText from '../ui/InputText';

import cx from 'classnames';

// InputWindow consists of a filter bar and the Button and InputText componenent samples. 
// The filter tells each component which index in the color array to render. 
// Each of the components also consist of customization props. (ex: border, fill, roundness, etc.)
class InputWindow extends Component {

    constructor(props){
        super(props);
        this.state = {
            filter: 0,
            primarySelected: true, 
            secondarySelected: false, 
            tertiarySelected: false
        }
    }

    // gets the text from the tab selected and adjusts the corresponding state values.
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
        return (
            <React.Fragment>
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

                    <span className="component-label">Text Fields</span>
                    <div className="component-section-wrapper">
                        <div>
                            <InputText
                                filter={this.state.filter}
                                border={true}
                                roundness="none"
                                line={false}/>
                            <InputText
                                filter={this.state.filter}
                                border={true}
                                roundness="small"
                                line={false}/>
                            <InputText
                                filter={this.state.filter}
                                border={true}
                                roundness="large"
                                line={false}/>        
                        </div>
                        <div>
                            <InputText
                                filter={this.state.filter}
                                border={false}
                                roundness="none"
                                line={true}/>
                            <InputText
                                filter={this.state.filter}
                                border={false}
                                roundness="none"
                                line={true}/>  
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default InputWindow;