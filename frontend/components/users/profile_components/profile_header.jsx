import React from 'react';
// import { Link } from 'react-router-dom';

const ProfileHeader = ({ user }) => {
  return (
    <div className='user-profile-header'>

      <div className='user-profile-header-main'>
        <div className='user-profile-header-avatar'></div>
        <div className='user-profile-header-info'>
          <span className='user-profile-header-name'>{user.fname} {user.lname}</span>
          <span className='user-profile-header-name'>{user.username}</span>
        </div>
      </div>

      <div className='user-profile-header-data'>
        <span>Joined {user.created_at.slice(0, 4)}</span>
      </div>

    </div>
  );
};

export default ProfileHeader;