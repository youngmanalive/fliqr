import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = ({ photo, currentUserId }) => {
  const username = (photo.user_id === currentUserId) ? 
    (`YOU!`) : (`${photo.fname} ${photo.lname}`);

  return (
    <li className='photo-container'>
      <Link to={`/photos/${photo.id}`}>
        <img src={photo.thumbUrl} />
        <div className='info-container'>
          <p className='title'>{photo.img_title}</p>
          <p className='username'>by {username}</p>
        </div>
      </Link>
    </li>
  );
};

export default PhotoIndexItem;
