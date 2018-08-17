import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllPhotos();
  }

  shuffle(array) {
    const shuffled = array.slice();
    let current = shuffled.length, temp, random;

    while (0 !== current) {
      random = Math.floor(Math.random() * current);
      current -= 1;
      temp = shuffled[current];
      shuffled[current] = shuffled[random];
      shuffled[random] = temp;
    }

    return shuffled;
  }

  render() {
    return (
      <div className='explore-page'>
        <h1>Explore</h1>
        <ul className='photo-index'>
          {this.shuffle(this.props.photos).map(photo => (
            <PhotoIndexItem key={photo.id} photo={photo} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PhotoIndex;
