import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from 'react-grid-gallery';
import PhotoViewContainer from './photo_view_container';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryPhotos: null,
      viewIdx: null
    };

    this.setViewer = this.setViewer.bind(this);
  }

  componentDidMount() {
    const { photos } = this.props;
    const galleryPhotos = this.generateArray(photos, this.setViewer);

    this.setState({ galleryPhotos });
  }

  componentDidUpdate(prevProps, prevState) {
    const { galleryPhotos, viewIdx } = this.state;
    const prevIdx = prevState.viewIdx;

    if (galleryPhotos.length !== this.props.photos.length) {
      const newGallery = this.generateArray(this.props.photos, this.setViewer);
      this.setState({ viewIdx: null, galleryPhotos: newGallery });
    } else if (prevIdx !== null && prevIdx === viewIdx) {
      if (this.props.photos[viewIdx].commentIds !== prevProps.photos[viewIdx].commentIds) {
        const newGallery = this.generateArray(this.props.photos, this.setViewer);
        this.setState({ galleryPhotos: newGallery });
      }
    }
  }
  
  generateArray(photos, setViewer) {
    return photos.map((photo) => ({
      id: photo.id,
      src: photo.src,
      thumbnail: photo.thumbUrl,
      thumbnailWidth: photo.thumb_width,
      thumbnailHeight: photo.thumb_height,
      img_title: photo.img_title,
      img_description: photo.img_description,
      fname: photo.fname,
      lname: photo.lname,
      created_at: photo.created_at,
      commentIds: photo.commentIds,
      user_id: photo.user_id,
      customOverlay: this.customOverlay(photo, this.props.currentUserId),
      setViewer
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

  // bound to each image object
  handleClick() {
    this.props.item.setViewer(this.props.index);
  }

  setViewer(idx = null) {
    this.setState({ viewIdx: idx });
  }

  render() {
    return (
      <div className='photo-index'>
        <div className='gallery-container'>
          {!this.state.galleryPhotos ? null :
            <React.Fragment>
              <Gallery
                images={this.state.galleryPhotos}
                rowHeight={280}
                margin={2}
                enableImageSelection={false}
                enableLightbox={false}
                onClickThumbnail={this.handleClick}
              />
              <PhotoViewContainer
                gallery={this.state.galleryPhotos} 
                viewIdx={this.state.viewIdx}
                setViewer={this.setViewer}
                isModal={true}
              />
            </React.Fragment>
          }
        </div>
      </div>
    );
  }
}

export default PhotoIndex;