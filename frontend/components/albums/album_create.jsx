import React from 'react';

class AlbumCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album_title: '',
      album_description: '',
      photo_ids: []
    };
  }

  componentDidMount() {
    console.log('album create has mounted');
  }

  clearSelection() {
    this.setState({ photo_ids: [] });
  }

  handleUpdate(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    window.alert("Hold up, album upload is not implemented yet! :)");
  }

  render() {
    return (
    <div className='album-create-container'>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input 
          type='text' 
          className='album-create-input-title' 
          placeholder='Add album title'
          onChange={this.handleUpdate('album_title')} />
        <textarea
          className='album-create-input-description'
          placeholder='Album description'
          onChange={this.handleUpdate('album_description')} />
        <button type='submit'>Save</button>
      </form>
    </div>
    );
  }
}

export default AlbumCreate;