import React from 'react'; 
import '../styles/create/SectionLabel.css';
import cx from 'classnames';

const SectionLabel = (props) => {
    return (
        <div className="section-header">
            <div className="section-label-container">
                <div className={cx(
                    "label-icon-container",
                    {
                        ["export-icon"]: props.exporticon
                    }
                )} style={{backgroundImage: `url(${props.url})`}}></div>
                <span className="section-label">{props.label}</span>
            </div>
        </div>
    )
}

export default SectionLabel;