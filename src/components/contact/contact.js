import React from 'react';
import './contact.css';


const Contact = (props) => {
   const contactinfo = props.contactinfo;
   return (
      <div className="row">
         <div className="col-xs-5 contact-label">
            {contactinfo.map(({label,info})=>(
               <p key={label}> {label}</p>
            ))}
         </div>
         <div className="col-xs-7 contact-info">
            {contactinfo.map(({label,info})=>(
               <p key={info}>{info}</p>
            ))}
         </div>
       </div>
  );
};

export default Contact;