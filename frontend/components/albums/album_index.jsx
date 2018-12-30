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
            let style, photoCount = 0;

            for (let i = 0; i < album.photoIds.length; i++) {
              if (profilePhotos[album.photoIds[i]]) {
                if (!style) style = { backgroundImage: `url(${profilePhotos[album.photoIds[i]].thumbUrl})` };
                photoCount++;
              } 
            }

            return (
              <Link className='album-index-link' to={`${props.match.url}/albums/${album.id}`}
                key={album.id}>
                <div className='album-index-item' style={style}>
                  <div className='album-title'>{album.album_title}</div>
                  <div className='album-photo-count'>{photoCount} photos</div>
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