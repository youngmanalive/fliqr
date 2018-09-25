import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.fetchAllPhotos();
    setTimeout(() => this.setState({ loading: false }), 2500);
  }

  loading() {
    return (this.state.loading) ? (
      <div className='loading-container'>
        <div className='lds-ellipsis'>
          <div></div><div></div><div></div><div></div>
        </div>
      </div>
    ) : (null);
  }

  render() {
    const currentUserId = this.props.currentUserId;

    return (
      <div>
        {this.loading()}
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
      </div>
    );
  }
}

export default PhotoIndex;
