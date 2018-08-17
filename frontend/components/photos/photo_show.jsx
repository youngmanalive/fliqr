import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  photoDate(date) {
    const dateObj = new Date(date);
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[dateObj.getMonth()];
    const day = dateObj.getDay();
    const year = dateObj.getFullYear();

    return `Uploaded on ${month} ${day}, ${year}`;
  }

  handleDelete() {
    this.props.deletePhoto(this.props.photo.id)
      .then(() => this.props.history.push('/explore'));
  }


  render() {
    const { photo } = this.props;
    if (!photo) return <h1>Loading...</h1>;

    const uploadDate = this.photoDate(photo.created_at);

    let deleteButton;
    if (this.props.currentUserId === photo.user_id) {
      deleteButton = (
        <button onClick={() => this.handleDelete()}
          className='photo-show-delete-button'>
          Delete photo
        </button>
      );
    }

    return (
      <div className='photo-show'>
        <div className='photo-show-box'>
          <Link to='/explore'>Back to explore</Link>
          <img src={photo.photoUrl} />
        </div>
        <div className='photo-show-info-box'>
          <div className='photo-show-info'>
            <div className='photo-show-user-avatar'></div>
            <div className='photo-show-user-info'>
              <span className='photo-show-username'>{photo.fname} {photo.lname}</span>
              <span className='photo-show-title'>{photo.img_title}</span>
              <span className='photo-show-description'>{photo.img_description}</span>
            </div>
          </div>
          <div>
            <span className='photo-show-date'>{uploadDate}</span>
            {deleteButton}
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoShow;

// <img src={this.props.photo.photoUrl} />
