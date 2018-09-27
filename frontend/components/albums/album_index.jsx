import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='user-profile-album-index'>
        <h1>A work in progress...</h1>
        <Link to={`/newalbum`}>New album</Link>
      </div>
    );
  }
}

export default AlbumIndex;