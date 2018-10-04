import React from 'react';

class AlbumCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album_title: '',
      album_description: '',
      photo_ids: {},
      loading: true
    };
  }

  componentDidMount() {
    this.props.fetchAllPhotos(this.props.currentUserId)
      .then(this.setState({ loading: false }));
  }

  clearSelection() {
    document.querySelectorAll('.album-create-photo-item').forEach(el => {
      el.style.border = '3px solid transparent';
    });
    this.title.value = '';
    this.description.value = '';

    this.setState({
      album_title: '',
      album_description: '',
      photo_ids: {}
    });
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

  handleSelect(e, id) {
    const photo_ids = this.state.photo_ids;
    if (photo_ids[id]) {
      delete photo_ids[id];
      e.currentTarget.style.border = '3px solid transparent';
    } else {
      photo_ids[id] = id;
      e.currentTarget.style.border = '3px solid red';
    }
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

    this.props.createAlbum(formData)
      .then(() => this.props.history.push(
        `/users/${this.props.currentUserId}/albums`
      ));
  }

  loading() {
    return (
      <div className='loading-container'>
        <div className='lds-ellipsis'>
          <div></div><div></div><div></div><div></div>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.loading) return this.loading();

    const { photos } = this.props;
    const submitReady = !this.state.album_title || !Object.keys(this.state.photo_ids).length;
    const revertChanges = (!this.state.album_title && !Object.keys(this.state.photo_ids).length) ?
      (null) : (<span 
                  onClick={this.clearSelection.bind(this)} 
                  className='album-create-clear'>Revert changes
                </span>);

    return (
    <div className='album-create-container'>
      <div className='album-create-form'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input 
            type='text'
            ref={el => { this.title = el; }}
            className='album-create-input-title' 
            placeholder='album title'
            onChange={this.handleUpdate('album_title')} />
          <textarea
            ref={el => { this.description = el; }}
            className='album-create-input-description'
            placeholder='album description'
            onChange={this.handleUpdate('album_description')} />
          <button 
            type='submit'
            className='album-create-submit'
            disabled={submitReady}>SAVE</button>
          <button
            className='album-create-cancel'
            onClick={this.handleCancel.bind(this)}>CANCEL</button>
          {revertChanges}
        </form>
      </div>
      <div className='album-create-photo-select-container'>
        <div className='album-create-photo-select'>
          {photos.map(photo => (
            <div 
              key={photo.id}
              className='album-create-photo-item' 
              onClick={(e) => this.handleSelect(e, photo.id)}>
              <img src={photo.photoUrl} />
            </div>
          ))}
        </div>
      </div>
    </div>
    );
  }
}

export default AlbumCreate;