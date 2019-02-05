import React from 'react';
import './software.css';


const Software = ({sofInfo}) => {

   const elements = sofInfo.map((item) => {

      const {tech, perc} = item;

      return (
         <div className="sw-item">
            <p>{tech}</p>
            <div className="p-bar">
               <div className="p-line" style={{width: perc}}></div>
            </div>
         </div>
      );
   });

   return (
      <div className="d-flex sw-group">
         {elements}
      </div>
   );
};

export default Software;