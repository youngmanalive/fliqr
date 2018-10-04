import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { profileUserId, currentUserId, profileAlbums } = this.props;
    const newAlbumButton = (profileUserId != currentUserId) ? (null) : (
      <Link to={`/newalbum`}>New album</Link>
    );

    console.log(profileAlbums);

    return (
      <div className='user-profile-album-index-container'>
        <div className='user-profile-album-index'>
          <div className='album-index-header'>{newAlbumButton}</div>
          <div className='album-index-list'>
            {profileAlbums.map(album => (
              <Link to={`${this.props.match.url}/albums/${album.id}`}
                key={album.id}>
                <div className='album-index-item'>
                  {album.album_title}
                  {album.photoIds.length}
                </div>
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    );
  }
}

export default AlbumIndex;