import React from 'react';

import './module-header.css';

const ModuleHeader = ({ icon, text='placeholder', style={} }) => {

    const icn = 'fa ' + icon;

    return (
        <span className="module-header">
            <h2><i className={icn} style={style} />
                {text.toUpperCase()}
                <hr className=''/></h2>
            <br />
        </span>
    );
};

export default ModuleHeader;