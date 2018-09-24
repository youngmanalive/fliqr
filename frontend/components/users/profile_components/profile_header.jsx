import React from 'react';

const ProfileHeader = ({ user, photoCount }) => {
  const displayName = `${user.fname} ${user.lname}`.toLowerCase();

  return (
    <div className='user-profile-header'>
      <div className='user-profile-header-gradient'>
        <div className='user-profile-header-main'>
          <div className='user-profile-header-avatar'></div>
          <div className='user-profile-header-info'>
            <p className='user-profile-header-name'>{displayName}</p>
            <p className='user-profile-header-username'>{user.username.toLowerCase()}</p>
          </div>
        </div>
        <div className='user-profile-header-data'>
          <span className='photo-count'>{photoCount} Photos</span>
          <span className='joined-date'>Joined {user.created_at.slice(0, 4)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;