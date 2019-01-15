import React from 'react';
import CommentIndexItem from './comment_index_item';
import CommentForm from './comment_form';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  
  componentDidMount() {
    this.setState({ loading: true }, () => {
      this.props.fetchComments(this.props.photoId)
        .then(() => this.setState({ loading: false }));
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.photoId !== this.props.photoId) {
      this.setState({ loading: true }, () => {
        this.props.fetchComments(this.props.photoId)
          .then(() => this.setState({ loading: false }));
      });
    }
  }

  render() {
    if (this.state.loading) return <div className="lds-dual-ring" />;
    
    const { comments } = this.props;
    return(
      <div className='photo-viewer-comment-container'>
        <ul className='photo-view-comment-index'>
          {comments.map(comment => (
            <CommentIndexItem key={comment.id}
              comment={comment}
              currentUserId={this.props.currentUserId}
              deleteComment={this.props.deleteComment}
            />
          ))}
        </ul>
        <CommentForm 
          createComment={this.props.createComment}
          photoId={this.props.photoId}
        />
      </div>
    );
  }
}

export default CommentIndex;