import React from 'react'; 
import '../styles/SectionLabel.css';

import cx from 'classnames';

// cx() method from 'classnames' library allows for dynamic classes. 
// if the component is given a prop lowTier = true, then the 'low-tier-header' class will be added.
// if its given a prop exporticon = true, it will style the icon a bit differently. 
const SectionLabel = (props) => {
    return (
        <div className={cx(
            "section-header",
            {
                ["low-tier-header"]: props.lowTier
            }
        )}>
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