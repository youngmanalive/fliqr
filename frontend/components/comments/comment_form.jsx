import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      body: '',
      photo_id: this.props.photoId
    };
  }

  handleUpdate(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.body.length) {
      return window.alert("Comment can't be blank!");
    } else {
      this.props.createComment(this.state).then(
        () => this.setState({ body: '' })
      );
    }
  }

  render() {
    return (
      <div className='photo-show-comment-form'>
        <textarea className='comment-form'
          value={this.state.body}
          placeholder='Add a comment'
          onChange={this.handleUpdate('body')} />
        <button className='comment-submit'
          onClick={this.handleSubmit.bind(this)}>
          Comment</button>
      </div>
    );
  }
}

export default CommentForm;