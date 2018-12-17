import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndex from '../../photos/photo_index';

const ProfileStream = ({ profilePhotos, profileUserId, currentUserId }) => {
  const photos = Object.values(profilePhotos).reverse();
  const uploadButton = (profileUserId != currentUserId) ? (null) : (
    <Link to='/upload'>Upload here</Link>
  );
  
  if (!photos.length) {
    return (
      <div className='user-profile-no-photos'>
        <h1>No photos!</h1>
        {uploadButton}
      </div>
    );
  }

  return (
    <div className='user-profile-photostream'>
      <PhotoIndex photos={photos} currentUserId={currentUserId} />
    </div>
  );
};

export default ProfileStream;
