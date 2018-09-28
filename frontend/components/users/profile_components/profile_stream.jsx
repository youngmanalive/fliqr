import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexItem from '../../photos/photo_index_item';

const ProfileStream = ({ photos, profileUserId, currentUserId }) => {

  console.log(profileUserId, currentUserId);

  const uploadButton = (profileUserId != currentUserId) ? (null) : (
    <Link to='/upload'>Upload here</Link>
  );

  if (!photos.length) {
    return (
      <div className='user-profile-no-photos'>
        <h1>No photos here!</h1>
        {uploadButton}
      </div>
    );
  }

  return (
    <div className='user-profile-photostream'>
    <ul className='photo-index'>
      {photos.map(photo => (
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
