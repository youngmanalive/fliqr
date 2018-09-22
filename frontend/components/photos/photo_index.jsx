import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.fetchAllPhotos()
      .then(() => this.setState({ loading: false }));
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
    const currentUserId = this.props.currentUserId;

    return (this.state.loading) ? (
      <h1 className='explore-page'>Loading...</h1>
    ) : (
      <div className='explore-page'>
        <h1>Explore</h1>
        <ul className='photo-index'>
          {this.props.photos.map(photo => (
            <PhotoIndexItem 
              key={photo.id} 
              photo={photo} 
              currentUserId={currentUserId} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PhotoIndex;
