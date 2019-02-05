import React from 'react';

import './module-header.css';

const ModuleHeader = ({ icon, text }) => {

    const icn = 'fa' + icon;

    return (
        <div className="module-header">
            <i className={icon} />
            <h1>{text.toUpperCase()}</h1>
        </div>
    );
};

export default ModuleHeader;