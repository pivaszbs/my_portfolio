import React from 'react';
import './profile.css';


const Profile = ({proInfo}) => {
   return (
      <div className="profile_description">
         {proInfo}
       </div>
  );
};

export default Profile;