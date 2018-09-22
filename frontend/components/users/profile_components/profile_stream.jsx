import React from 'react';
import PhotoIndexItem from '../../photos/photo_index_item';

const ProfileStream = ({ photos, currentUserId }) => {
  if (!photos.length) {
    return <h1 className='user-profile-no-photos'>No photos!</h1>
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
