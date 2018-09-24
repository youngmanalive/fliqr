import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexItem from '../comments/comment_index_item';
import CommentForm from '../comments/comment_form';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.loadPhotoData(this.props.match.params.photoId);
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    const photoId = this.props.match.params.photoId;

    if (prevProps.photoId !== photoId) {
      this.setState({ loading: true }, () => this.loadPhotoData(photoId));
      window.scrollTo(0, 0);
    }
  }

  loadPhotoData(photoId) {
    Promise.all([
      this.props.fetchPhoto(photoId),
      this.props.fetchComments(photoId)
    ]).then(() => this.setState({ loading: false }));
  }

  uploadDate(date) {
    if (!date) return <h1>Loading...</h1>;

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[parseInt(date.slice(5, 7)) - 1];
    const day = date.slice(8, 10);
    const year = date.slice(0, 4);

    return `Uploaded on ${month} ${day}, ${year}`;
  }

  handleDelete() {
    this.props.deletePhoto(this.props.photo.id)
      .then(() => this.props.history.goBack());
  }

  renderComments(ids, comments) {
    return (!ids.length) ? (null) : (
      <div className='photo-show-comments-container'>
        <ul>
          {ids.map(id => {
            return (comments[id] === undefined) ? (null) : (
              <li key={`${id}`}>
                <CommentIndexItem
                  comment={comments[id]}
                  deleteComment={this.props.deleteComment}
                  currentUserId={this.props.currentUserId} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  render() {
    if (this.state.loading || !this.props.dataReady) {
      return <h1>Loading...</h1>;
    }

    const { photo, comments } = this.props;
    const uploadDate = this.uploadDate(photo.created_at);
    const commentCount = Object.values(comments).length;
    const commentStat = `${commentCount} ${
      (commentCount === 1) ? 'Comment' : 'Comments'
    }`;

    let deleteButton;
    if (this.props.currentUserId === photo.user_id) {
      deleteButton = (
        <button onClick={() => this.handleDelete()}
          className='photo-show-delete-button'>
          Delete Photo
        </button>
      );
    }

    return (
      <div className='photo-show'>
        <div className='photo-show-box'>
          <span onClick={() => this.props.history.goBack()}>&#x2190; Back</span>
          <img src={photo.photoUrl} />
        </div>
        <div className='photo-show-info-box'>
          <div className='photo-show-col-a'>
            <div className='photo-show-info'>
              <Link to={`/users/${photo.user_id}`} className='photo-show-user-avatar' />
              <div className='photo-show-user-info'>
                <Link to={`/users/${photo.user_id}`} className='photo-show-username'>
                  {photo.fname} {photo.lname}
                </Link>
                <span className='photo-show-title'>{photo.img_title}</span>
                <span className='photo-show-description'>{photo.img_description}</span>
              </div>
            </div>
            {this.renderComments(photo.commentIds, comments)}
            <CommentForm createComment={this.props.createComment} photoId={photo.id} />
          </div>
          <div className='photo-show-col-b'>
            <div className='photo-show-data'>
              <div className='photo-show-stats'>
                <div className='photo-show-comment-count'>{commentStat}</div>
              </div>
              <div className='photo-show-date-delete'>
                <div className='photo-show-upload-date'>{uploadDate}</div>
                {deleteButton}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoShow;
