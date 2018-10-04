import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexItem from '../../photos/photo_index_item';

const ProfileStream = ({ profilePhotos, profileUserId, currentUserId }) => {

  const uploadButton = (profileUserId != currentUserId) ? (null) : (
    <Link to='/upload'>Upload here</Link>
  );

  if (!profilePhotos.length) {
    return (
      <div className='user-profile-no-photos'>
        <h1>No photos!</h1>
        {uploadButton}
      </div>
    );
  }

  return (
    <div className='user-profile-photostream'>
    <ul className='photo-index'>
      {profilePhotos.map(photo => (
        <PhotoIndexItem 
          key={photo.id} 
          photo={photo} 
          currentUserId={currentUserId} />
      ))}
    </ul>
  </div>
  );
};

export default ProfileStream;
