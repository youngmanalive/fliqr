import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = ({ photo }) => (
  <li className='photo-container'>
    <Link to={`/photos/${photo.id}`}>
      <div className='info-container'>
        <p className='title'>{photo.img_title}</p>
        <p className='username'>by {photo.fname} {photo.lname}</p>
      </div>
      <img src={photo.photoUrl}/>
    </Link>
  </li>
);

export default PhotoIndexItem;

// <div className='photo-index-info'>
//   <p>{photo.img_title}</p>
//   <p>by <strong>{photo.username}</strong></p>
// </div>

// <Link to={`/photos/${photo.id}`}></Link>
