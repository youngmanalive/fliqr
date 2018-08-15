import React from 'react';
// import { Link } from 'react-router-dom';

const PhotoIndexItem = ({ photo }) => (
  <li className='photo-container'>
    <div className='info-container'>
      <p className='title'>{photo.img_title}</p>
      <p className='username'>{photo.username}</p>
    </div>
    <a href='#' className='photo'><img src={photo.photoUrl}/></a>
  </li>
);

export default PhotoIndexItem;

// <div className='photo-index-info'>
//   <p>{photo.img_title}</p>
//   <p>by <strong>{photo.username}</strong></p>
// </div>
