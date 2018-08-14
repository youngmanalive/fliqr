import React from 'react';
// import { Link } from 'react-router-dom';

const PhotoIndexItem = ({ photo }) => (
  <li>
    <img src={photo.photoUrl} />
  </li>
);

export default PhotoIndexItem;

// <div className='photo-index-info'>
//   <p>{photo.img_title}</p>
//   <p>by <strong>{photo.username}</strong></p>
// </div>
