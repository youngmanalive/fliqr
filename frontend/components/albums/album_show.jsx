import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexItem from '../photos/photo_index_item';

export const AlbumShow = (props) => {
  window.scrollTo(0, 0);
  const userId = parseInt(props.match.params.userId);
  const albumId = parseInt(props.location.pathname.split('/')[4]);
  const album = props.profileAlbums[albumId];
  const userName = <Link to={`/users/${userId}`}>By:&nbsp;
                     {props.profileUser.fname.toLowerCase()}&nbsp;
                     {props.profileUser.lname.toLowerCase()}
                   </Link>;
  const backButton = <Link to={`/users/${userId}/albums`}>
                       &#x2190; Back to albums list
                     </Link>;
  const editButton = (userId !== props.currentUserId) ? (null) : (
    <Link to={`/organize/${albumId}`} className='album-show-edit'>Edit in Organizer</Link>
  );

  if (album === undefined || album.user_id !== userId) {
    return (
      <div className='user-profile-errors'>
        <div className='error-message'>Album not found!</div>
        <div className='error-message'>
          This album doesn't exist or it does not belong to {props.profileUser.fname}
        </div>
        <Link to={`/users/${userId}`}>Back to {props.profileUser.fname}'s profile</Link>
      </div>
    );
  }


  return (
    <div className='album-show-container'>
      <div className='album-show-header'>
        {backButton}
        {editButton}
      </div>
      <div className='album-show-info'>
        <div className='album-title'>{album.album_title}</div>
        <div className='album-description'>{album.album_description}</div>
        <div className='album-photo-count'>{album.photoIds.length} photos</div>
        <div className='album-username'>{userName}</div>
      </div>
      <ul className='photo-index'>
        {album.photoIds.sort().map(id => (
          <PhotoIndexItem
            key={id}
            photo={props.profilePhotos[id]}
            currentUserId={props.currentUserId} />
        ))}
      </ul>
    </div>
  );
};

export default AlbumShow;