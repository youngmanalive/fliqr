import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Gallery from 'react-grid-gallery';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryPhotos: null
    };
  }

  componentDidMount() {
    const { photos, history } = this.props;
    const galleryPhotos = this.generateArray(photos, history.push);

    this.setState({ galleryPhotos });
  }
  
  generateArray(photos, push) {
    return photos.map(photo => ({
      src: photo.photoUrl,
      thumbnail: photo.thumbUrl,
      thumbnailWidth: photo.thumb_width,
      thumbnailHeight: photo.thumb_height,
      showPhoto: () => push(`/photos/${photo.id}`),
      customOverlay: this.customOverlay(photo, this.props.currentUserId)
    }));
  }

  customOverlay(photo, currentUserId) {
    const { img_title, user_id, fname, lname, commentIds } = photo;
    const user = currentUserId === user_id ? 'YOU!' : `${fname} ${lname}`;
    const comments = commentIds.length || '';

    return (
      <div className='photo-index-overlay'>
        <h4>{img_title}</h4>
        <Link to={`/users/${user_id}`}>by {user}</Link>
        <span className='comment-count'>{comments}</span>
      </div>
    );
  }

  // bound to image object
  handleClick() {
    this.props.item.showPhoto();
  }

  render() {
    return (
      <div className='photo-index'>
        <div className='gallery-container'>
        {!this.state.galleryPhotos ? null :
          <Gallery
            images={this.state.galleryPhotos}
            rowHeight={280}
            margin={2}
            enableImageSelection={false}
            enableLightbox={false}
            onClickThumbnail={this.handleClick}
          />
        }
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoIndex);