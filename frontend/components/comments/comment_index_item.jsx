import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = ({ comment, deleteComment, currentUserId }) => {
  if (comment === undefined) return null;

  const author = `${comment.fname} ${comment.lname}`;
  const authorId = comment.user_id;
 
  let commentDeleteButton;
  if (authorId === currentUserId) {
    commentDeleteButton = (
      <button onClick={() => deleteComment(comment.id)}
        className='comment-delete-button'>
        Delete Comment
      </button>
    );
  }

  return (
    <li className='comment-container'>
      <div className='comment-author-avatar'/>
      <div className='comment-info'>
        <div className='comment-author-container'>
          <Link to={`/users/${authorId}`} className='comment-author'>{author}</Link>
          {commentDeleteButton}
        </div>
        <span className='comment-body'>{comment.body}</span>
      </div>
    </li>
  );
};

export default CommentIndexItem;