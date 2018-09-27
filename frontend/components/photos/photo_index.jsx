import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.fetchAllPhotos().then(() => {
      this.imagesLoaded(this.imageIndex).then(() => {
        const loader = this.imageIndex.querySelector('.loading-container');
        loader.style.opacity = '0';
        setTimeout(() => this.setState({ loading: false }), 500);
      });
    });
  }

  imagesLoaded(parent) {
    const images = parent.querySelectorAll('img');
    const promises = [];
    for (let i = 0; i < images.length; i++) {
      promises.push(new Promise((resolve) => {
        if (images[i].complete) {
          resolve();
        } else {
          images[i].onload = resolve;
        }
      }));
    }
    return Promise.all(promises);
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
      <div ref={el => { this.imageIndex = el; }}>
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
