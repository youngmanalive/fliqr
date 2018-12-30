import PhotoView from './photo_view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPhoto, deletePhoto } from '../../actions/photo_actions';
import { 
  fetchAllComments,
  createComment,
  deleteComment
} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  const photoId = ownProps.match ? ownProps.match.params.photoId : null;
  const fetchedPhoto = photoId ? state.entities.photos[photoId] : null;

  return {
    photoId,
    fetchedPhoto,
    currentUserId: state.session.currentUserId,
    errors: state.errors.photos
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPhoto: id => dispatch(fetchPhoto(id)),
  deletePhoto: id => dispatch(deletePhoto(id)),
  fetchComments: id => dispatch(fetchAllComments(id)),
  createComment: formData => dispatch(createComment(formData)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PhotoView));