import React from 'react';
import './experience.css';


const Experience = ({expInfo}) => {
   const elements = expInfo.map((item) => {
      const { id, company = 'lorem', job = 'lorem', info } = item;

      return (
          <span key={id}>
              <h3 style={{ color: 'steelblue' }}>
                  <i style={{ color: 'black' }} className='fa fa-circle' />  {company.toUpperCase()}
                  //2007-2019
              </h3>
              <h4>{job.toUpperCase()}</h4>
              <p>{info}</p>
          </span>
      );
  });
  return (
      <div className='edu-group-item'>
          {elements}
      </div>
  );
};

export default Experience;