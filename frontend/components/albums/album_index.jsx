import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndex = (props) => {
  const { profileUserId, currentUserId, profileAlbums, deleteAlbum } = props;
  const albumArray = Object.values(profileAlbums);
  const newAlbumButton = (profileUserId != currentUserId) ? (null) : (
    <Link to={`/organize`}>New album</Link>
  );
  const deleteButton = (profileUserId != currentUserId) ? (null) : (
    <div className='album-index-item-delete'>
      Delete
    </div>
  );

  return (
    <div className='user-profile-album-index-container'>
      <div className='user-profile-album-index'>
        <div className='album-index-header'>{newAlbumButton}</div>
        <div className='album-index-list'>
          {albumArray.map(album => (
            <Link to={`${props.match.url}/albums/${album.id}`}
              key={album.id}>
              <div className='album-index-item'>
                <div className='album-title'>{album.album_title}</div>
                <div className='album-photo-count'>{album.photoIds.length} photos</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumIndex;