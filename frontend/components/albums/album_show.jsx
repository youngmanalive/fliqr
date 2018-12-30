import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndex from '../photos/photo_index';

const handleDelete = (albumId, userId, deleteAlbum, push) => {
  if (confirm('Are you sure you want to delete this album?')) {
    deleteAlbum(albumId).then(push(`/users/${userId}/albums`));
  }
};

export const AlbumShow = (props) => {
  window.scrollTo(0, 0);
  const userId = parseInt(props.match.params.userId);
  const isCurrentUser = userId === props.currentUserId;
  const albumId = parseInt(props.location.pathname.split('/')[4]);
  const album = props.profileAlbums[albumId];
  const userName = <Link to={`/users/${userId}`}>By:&nbsp;
                     {props.profileUser.fname.toLowerCase()}&nbsp;
                     {props.profileUser.lname.toLowerCase()}
                   </Link>;
  const backButton = <Link to={`/users/${userId}/albums`}>
                       &#x2190; Back to albums list
                     </Link>;
  const editButton = (!isCurrentUser) ? (null) : (
    <Link to={`/organize/${albumId}`} className='album-show-edit'>
      Edit in Organizer
    </Link>
  );
  const deleteButton = (!isCurrentUser) ? (null) : (
    <span 
      className='album-show-delete'
      onClick={() => handleDelete(albumId, userId, props.deleteAlbum, props.history.push)}>
      Delete this album
    </span>
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

  let photoCount = 0;

  const photos = album.photoIds.reduce((result, id) => {
    if (props.profilePhotos[id]) {
      result.push(props.profilePhotos[id]);
      photoCount++;
    }
    return result;
  }, []);

  return (
    <div className='album-show-container'>
      <div className='album-show-header'>
        {backButton}
        {editButton}
        {deleteButton}
      </div>
      <div className='album-show-info'>
        <div className='album-title'>{album.album_title}</div>
        <div className='album-description'>{album.album_description}</div>
        <div className='album-photo-count'>{photoCount} photos</div>
        <div className='album-username'>{userName}</div>
      </div>
      <PhotoIndex photos={photos} currentUserId={props.currentUserId} />
    </div>
  );
};

export default AlbumShow;