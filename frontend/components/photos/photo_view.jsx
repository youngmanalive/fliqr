import React from 'react';
import CommentIndex from '../comments/comment_index_container';

class PhotoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: null,
      loading: true,
      isModal: false,
      viewIdx: null,
      fetchedPhoto: null,
      commentCount: null
    };

    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount() {
    if (this.props.gallery) {
      this.setState({
        gallery: this.props.gallery,
        viewIdx: null,
        isModal: true,
        loading: false
      });
    } else if (this.props.fetchedPhoto) {
      this.setState({
        fetchedPhoto: this.props.fetchedPhoto,
        commentCount: this.props.fetchedPhoto.commentIds.length,
        loading: false
      });
    } else {
      this.props.fetchPhoto(this.props.photoId)
        .then(() => this.setState({
          fetchedPhoto: this.props.fetchedPhoto,
          commentCount: this.props.fetchedPhoto.commentIds.length,
          loading: false
        }));
    }
  }

  componentWillUnmount() {
    document.documentElement.classList.remove('no-scroll');
  }

  componentDidUpdate(prevProps, prevState) {
    const {isModal, viewIdx, photoId, fetchedPhoto, gallery } = this.props;
    
    if (isModal && prevProps.viewIdx !== viewIdx) {
      this.setState({ 
          viewIdx,
          commentCount: viewIdx !== null ? gallery[viewIdx].commentIds.length : null
        }, () => {
        if (viewIdx !== null) {
          document.documentElement.classList.add('no-scroll');
        } else {
          document.documentElement.classList.remove('no-scroll');
        }
      });
    } else if (isModal && viewIdx !== null) {
      setTimeout(() => {
        if (prevState.commentCount !== gallery[viewIdx].commentIds.length) {
          this.setState({ commentCount: gallery[viewIdx].commentIds.length });
        }
      });
    } else if (prevProps.photoId !== photoId) {
      this.setState({ loading: true }, () => {
        this.props.fetchPhoto(photoId)
          .then(() => this.setState({
            fetchedPhoto: this.props.fetchedPhoto,
            commentCount: this.props.fetchedPhoto.commentIds.length,
            loading: false
          }));
      });
    } else if (fetchedPhoto && this.state.fetchedPhoto) {
      if (fetchedPhoto.commentIds.length !== this.state.fetchedPhoto.commentIds.length) {
        this.setState({ fetchedPhoto, commentCount: fetchedPhoto.commentIds.length });
      }
    }
  }

  uploadDate(date) {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[parseInt(date.slice(5, 7)) - 1];
    const day = date.slice(8, 10);
    const year = date.slice(0, 4);

    return `Uploaded on ${month} ${day}, ${year}`;
  }

  handlePrevious() {
    const { viewIdx, setViewer, gallery } = this.props;
    const idx = viewIdx - 1;
    setViewer(idx < 0 ? gallery.length - 1 : idx);
  }

  handleNext() {
    const { viewIdx, setViewer, gallery } = this.props;
    const idx = viewIdx + 1;
    setViewer(idx >= gallery.length ? 0 : idx);
  }

  loading() {
    return (
      <div className='loading-container'>
        <div className='lds-ellipsis'>
          <div/><div/><div/><div/>
        </div>
      </div>
    );
  }

  render() {
    const { isModal, viewIdx, loading, fetchedPhoto, commentCount } = this.state;

    if (loading) return this.loading();

    let closeModal, previous, next;

    if (isModal) {
      if (viewIdx === null) return null;
      closeModal = <button className='photo-modal-button close' onClick={() => this.props.setViewer()}>&times;</button>;
      previous = <button className='photo-modal-button previous' onClick={this.handlePrevious}>&#8592;</button>;
      next = <button className='photo-modal-button next' onClick={this.handleNext}>&#8594;</button>;
    }

    const photo = !fetchedPhoto ? this.props.gallery[viewIdx] : fetchedPhoto;
    const imgSrc = isModal ? this.props.gallery[viewIdx].src : fetchedPhoto.photoUrl;
    const uploadDate = this.uploadDate(photo.created_at);
    const commentStat = `${commentCount} comment${commentCount === 1 ? '' : 's'}`;

    return (
      <div className='fliqr-photo-viewer'>
        <div className='photo-viewer'>
          {closeModal}{previous}{next}
          <div className='photo-container'>
            <img src={imgSrc} />
          </div>
        </div>
        <div className='photo-viewer-info'>
          <CommentIndex photoId={photo.id} />
          <div>
            <h1>{commentStat}</h1>
            <h1>{uploadDate}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoView;