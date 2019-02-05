import React from 'react';
import './education.css';

const Education = ({ eduInfo }) => {
    const elements = eduInfo.map((item) => {
        const { id, header = 'lorem', university = 'lorem', info } = item;

        return (
            <span key={id} className='edu-group-item'>
                <h3 style={{ color: 'steelblue' }}>
                    <i style={{ color: 'black' }} className='fa fa-circle' />  {header.toUpperCase()}
                </h3>
                <h4>{university.toUpperCase()}</h4>
                <p>{info}</p>
            </span>
        );
    });
    return (
        <div>
            {elements}
        </div>
    );
};

export default Education;