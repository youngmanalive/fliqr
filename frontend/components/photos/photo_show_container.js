import { connect } from 'react-redux';
import { fetchPhoto, deletePhoto } from '../../actions/photo_actions';
import { 
  fetchAllComments,
  createComment,
  deleteComment
} from '../../actions/comment_actions';

import PhotoShow from './photo_show';

const msp = (state, ownProps) => ({
  currentUserId: state.session.currentUserId,
  photo: state.entities.photos[ownProps.match.params.photoId],
  photoId: ownProps.match.params.photoId,
  comments: state.entities.comments,
  dataReady: Boolean(state.entities.photos[ownProps.match.params.photoId])
});

const mdp = dispatch => ({
  fetchPhoto: id => dispatch(fetchPhoto(id)),
  deletePhoto: id => dispatch(deletePhoto(id)),
  fetchComments: id => dispatch(fetchAllComments(id)),
  createComment: formData => dispatch(createComment(formData)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(msp, mdp)(PhotoShow);
