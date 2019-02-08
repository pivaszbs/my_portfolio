import React from 'react';
import './main-info.css';

const MainInfo = ({ name, surname, workplace, photo }) => {
    return (
        <div className="main-info">
                <div className="main-img">
                    <div className="circle">
                    <figure className="main-img_photo">
                        <img alt="my photo"className="main-img_photo" src={photo} />
                    </figure>
                    </div>
                </div>
                <div className="main-text">
                    <h2>{name}</h2>
                    <h1>{surname}</h1>
                    <h3>{workplace}</h3>
                </div>
        </div>
    );
};

export default MainInfo;