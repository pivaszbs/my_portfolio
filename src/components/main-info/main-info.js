import React from 'react';
import './main-info.css';
import MyFoto from './ez.jpg';

const MainInfo = ({name, surname, workplace}) => {
   return (
       <div className="main-img">
            <div className="circle">
                <img alt="my huy" className="main-img_photo" src={MyFoto} />
            </div>

       </div>
  );
};

export default MainInfo;