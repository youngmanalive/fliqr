import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

const receiveAllComments = comments => ({ type: RECEIVE_ALL_COMMENTS, comments });
const receiveComment = comment => ({ type: RECEIVE_COMMENT, comment });
const removeComment = comment => ({ type: REMOVE_COMMENT, comment });
const receiveErrors = errors => ({ type: RECEIVE_COMMENT_ERRORS, errors });

export const fetchAllComments = id => dispatch => (
  CommentApiUtil.fetchAllComments(id).then(
    comments => dispatch(receiveAllComments(comments)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const createComment = formData => dispatch => (
  CommentApiUtil.createComment(formData).then(
    comment => dispatch(receiveComment(comment)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const deleteComment = id => dispatch => (
  CommentApiUtil.deleteComment(id).then(
    res => dispatch(removeComment(res)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);