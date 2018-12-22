import React from 'react';
import { Redirect } from 'react-router-dom';
import isEqual from 'lodash/isEqual';
import merge from 'lodash/merge';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      editMode: Boolean(this.props.match.params.albumId)
    };
    this.initialState = null;
  }

  newState() {
    return {
      album_title: '',
      album_description: '',
      photo_ids: {},
      loading: false
    };
  }

  editState() {
    const photo_ids = {};
    this.props.album.photoIds.forEach(id => { photo_ids[id] = id; });
    return {
      album_title: this.props.album.album_title,
      album_description: this.props.album.album_description,
      photo_ids,
      loading: false
    };
  }

  revertChanges() {
    this.setState(merge({}, this.initialState));
  }

  componentDidMount() {
    if (this.state.editMode) {
      Promise.all([
        this.props.fetchAllPhotos(this.props.currentUserId),
        this.props.fetchAlbum(this.props.match.params.albumId)
      ]).then(() => {
        this.setState(this.editState(), () => {
          this.initialState = merge({}, this.state);
        });
      });
    } else {
      this.props.fetchAllPhotos(this.props.currentUserId)
        .then(() => {
          this.setState(this.newState());
          this.initialState = merge({}, this.state);
      });
    }
  }

  handleCancel(e) {
    e.preventDefault();
    if (confirm('Are you sure?')) {
      this.props.history.push(`/users/${this.props.currentUserId}/albums`);
    }
  }

  handleUpdate(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSelect(id) {
    const photo_ids = this.state.photo_ids;
    if (photo_ids[id]) { delete photo_ids[id]; } else { photo_ids[id] = id; }
    this.setState({ photo_ids });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('album[album_title]', this.state.album_title);
    formData.append('album[album_description]', this.state.album_description);
    formData.append('photo_ids', JSON.stringify(
      Object.values(this.state.photo_ids)
    ));
    
    if (this.state.editMode) {
      this.props.updateAlbum(formData, this.props.match.params.albumId)
        .then(() => this.props.history.push(
          `/users/${this.props.currentUserId}/albums`
        ));
    } else {
      this.props.createAlbum(formData)
        .then(() => this.props.history.push(
          `/users/${this.props.currentUserId}/albums`
        ));
    }
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

  render() {

    if ((this.props.match.params.albumId && this.props.album === undefined) || 
    ((this.props.album && this.props.album.user_id !== this.props.currentUserId))) {
      return <Redirect to={`/users/${this.props.currentUserId}/albums`} />;
    }
    
    if (this.state.loading) return this.loading();

    const { photos } = this.props;
    const selectedStyle = id => (this.state.photo_ids[id]) ?
      ({ border: '3px solid red' }) : ({ border: '3px solid transparent' });
      
    const submitReady = !this.state.album_title || !Object.keys(this.state.photo_ids).length;
    const revertChanges = (this.initialState === null || isEqual(this.state, this.initialState)) ? 
      (null) : (<span 
                  onClick={this.revertChanges.bind(this)} 
                  className='album-form-clear'>Revert changes
                </span>);

    return (
    <div className='album-form-container'>
      <div className='album-form'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input 
            type='text'
            className='album-form-input-title' 
            placeholder='album title'
            onChange={this.handleUpdate('album_title')}
            value={this.state.album_title} />
          <textarea
            className='album-form-input-description'
            placeholder='album description'
            onChange={this.handleUpdate('album_description')}
            value={this.state.album_description} />
          <button 
            type='submit'
            className='album-form-submit'
            disabled={submitReady}>SAVE</button>
          <button
            className='album-form-cancel'
            onClick={this.handleCancel.bind(this)}>CANCEL</button>
          {revertChanges}
        </form>
      </div>
      <div className='album-form-photo-select-container'>
        <div className='album-form-photo-select'>
          {photos.map(photo => (
            <div style={selectedStyle(photo.id)}
              key={photo.id}
              className='album-form-photo-item' 
              onClick={() => this.handleSelect(photo.id)}>
              <img src={photo.thumbUrl} />
            </div>
          ))}
        </div>
      </div>
    </div>
    );
  }
}

export default AlbumForm;