import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { 
  fetchAllComments, deleteComment, createComment
} from '../../actions/comment_actions';

const mapStateToProps = state => ({
  comments: Object.values(state.entities.comments),
  currentUserId: state.session.currentUserId
});

const mapDispatchToProps = dispatch => ({
  fetchComments: id => dispatch(fetchAllComments(id)),
  createComment: formData => dispatch(createComment(formData)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);