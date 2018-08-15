import React from 'react';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_title: '',
      img_description: '',
      photoFile: null,
      photoUrl: null
    };
  }

  handleUpdate(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleNull() {
    return (this.state.img_description.length) ?
      (this.state.img_description) : (null);
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    console.log(file);
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        photoFile: file,
        photoUrl: fileReader.result
      });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[img_title]', this.state.img_title);
    formData.append('photo[img_description]', this.state.img_description);
    if (this.state.photoFile) {
      formData.append('photo[file]', this.state.photoFile);
    }
    this.props.createPhoto(formData)
      .then(() => this.props.history.replace('/home'));
  }


  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    return (
      <div className='upload-page'>
        {preview}
        <h1>Drag & drop a photo here</h1>
        <h1>or</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type='text'
            value={this.state.img_title}
            onChange={this.handleUpdate('img_title')} />
          <input
            type='text'
            value={this.state.img_description}
            onChange={this.handleUpdate('img_description')} />
          <input type='file' accept='image/*'
            onChange={this.handleFile.bind(this)}/>
          <input type='submit' value='Upload!' />
        </form>
      </div>
    );
  }
}

export default PhotoUpload;
