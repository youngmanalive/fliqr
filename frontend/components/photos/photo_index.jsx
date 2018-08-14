import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllPhotos();
  }

  render() {
    return (
      <ul className='photo-index-container'>
        {this.props.photos.map(photo => (
          <PhotoIndexItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  }
}

export default PhotoIndex;
