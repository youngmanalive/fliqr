import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndex = (props) => {
  const { profileUserId, currentUserId, profileAlbums, profilePhotos } = props;
  const albumArray = Object.values(profileAlbums);
  const newAlbumButton = (profileUserId != currentUserId) ? (null) : (
    <Link to={`/organize`}>New album</Link>
  );

  return (
    <div className='user-profile-album-index-container'>
      <div className='user-profile-album-index'>
        <div className='album-index-header'>{newAlbumButton}</div>
        <div className='album-index-list'>
          {albumArray.map(album => {
            let style = { backgroundImage: `url(${profilePhotos[album.photoIds[0]].thumbUrl})` };
            return (
              <Link className='album-index-link' to={`${props.match.url}/albums/${album.id}`}
                key={album.id}>
                <div className='album-index-item' style={style}>
                  <div className='album-title'>{album.album_title}</div>
                  <div className='album-photo-count'>{album.photoIds.length} photos</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AlbumIndex;