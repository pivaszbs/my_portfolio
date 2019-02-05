import React from 'react';

import './module-header.css';

const ModuleHeader = ({ icon, text }) => {

    const icn = 'fa ' + icon;

    return (
        <span className="module-header">
            
            <h2><i className={icn} />{text.toUpperCase()}<hr className=''/></h2>
        </span>
    );
};

export default ModuleHeader;