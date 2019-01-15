import React from 'react';
import { Link } from 'react-router-dom';
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
      commentCount: null,
      notFound: false
    };

    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
        .then(
          () => this.setState({
            fetchedPhoto: this.props.fetchedPhoto,
            commentCount: this.props.fetchedPhoto.commentIds.length,
            loading: false
          }),
          () => this.setState({ loading: false, notFound: true })
        );
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
        if (prevState.commentCount !== gallery[viewIdx].commentIds.length) {
          this.setState({ commentCount: gallery[viewIdx].commentIds.length });
        }
    } else if (prevProps.photoId !== photoId) {
      this.setState({ loading: true }, () => {
        this.props.fetchPhoto(photoId)
          .then(
            () => this.setState({
              fetchedPhoto: this.props.fetchedPhoto,
              commentCount: this.props.fetchedPhoto.commentIds.length,
              loading: false,
              notFound: false
            }),
            () => this.setState({ loading: false, notFound: true })
          );
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

  photoNotFound() {
    document.title = 'Fliqr - Photo not found';
    return (
      <div className='user-profile-errors'>
        <div className='error-message'>{this.props.errors[0]}</div>
        <Link to={`/users/${this.props.currentUserId}`}>Close</Link>
      </div>
    );
  }

  handleDelete(id) {
    const { isModal, deletePhoto, history, currentUserId } = this.props;
    if (confirm("Are you sure you want to delete this photo? You cannot undo this!")) {
      deletePhoto(id).then(() => {
        if (!isModal) history.replace(`/users/${currentUserId}`);
        else this.props.setViewer();
      });
    }
  }

  copyToClipbard(id) {
    const link = `${window.location.origin}/#/photos/${id}`;
    let copySuccess = false;

    if (document.execCommand) {
      let el = document.createElement('textarea');
      el.value = link;
      el.setAttribute("readonly", "");
      el.style = {position: "absolute", width: 0, height: 0, opacity: 0};
      document.body.appendChild(el);
      el.select();
      if (document.execCommand("copy")) copySuccess = true;
      document.body.removeChild(el);
    } 

    if (copySuccess) {
      alert("Successfully copied to clipboard!\n\n" + link);
    } else {
      prompt("Copy this link:", link);
    }
  }

  render() {
    const { isModal, viewIdx, loading, fetchedPhoto, commentCount, notFound } = this.state;

    if (notFound) return this.photoNotFound();
    if (loading) return this.loading();

    const photo = isModal ? this.props.gallery[viewIdx] : fetchedPhoto;

    let closeModal, previous, next, deletePhoto;

    if (isModal) {
      if (!photo || viewIdx === null) return null;
      closeModal = <button className='photo-modal-button close' onClick={() => this.props.setViewer()}>&times;</button>;
      previous = <button className='photo-modal-button previous' onClick={this.handlePrevious}>&#10094;</button>;
      next = <button className='photo-modal-button next' onClick={this.handleNext}>&#10095;</button>;
    }

    if (this.props.currentUserId === photo.user_id) {
      deletePhoto = (
        <button onClick={() => this.handleDelete(photo.id, photo.user_id)}>
          Delete
        </button>
      );
    }

    const shareLink = (
      <button onClick={() => this.copyToClipbard(photo.id)}>
        Share
      </button>
    );

    const uploadDate = this.uploadDate(photo.created_at);
    const commentStat = `${commentCount} Comment${commentCount === 1 ? '' : 's'}`;

    return (
      <div className='fliqr-photo-viewer'>
        <div className='photo-viewer'>
          {closeModal}{previous}{next}
          <div className='photo-container'>
            <img src={photo.src} />
          </div>
        </div>
        <div className='photo-viewer-info'>
          <div>
            <div className='photo-info-container'>
              <Link to={`/users/${photo.user_id}`} className='photo-user-avatar' />
              <div className='photo-user-info'>
                <Link to={`/users/${photo.user_id}`} className='photo-username'>
                  {photo.fname} {photo.lname}
                </Link>
                <h2 className='photo-title'>{photo.img_title}</h2>
                <h2 className='photo-description'>{photo.img_description}</h2>
              </div>
            </div>
            <CommentIndex photoId={photo.id} />
          </div>
          <div className='photo-view-stats'>
            <div>
              <h1>{commentStat}</h1>
              <h1>{uploadDate}</h1>
            </div>
            {deletePhoto}
            {shareLink}
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoView;