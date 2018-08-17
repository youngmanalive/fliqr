import React from 'react';


class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.nullState();
  }

  nullState() {
    return {
      img_title: '',
      img_description: '',
      photoFile: null,
      photoUrl: null
    };
  }

  handleUpdate(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
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
      .then(() => this.props.history.replace('/explore'));
  }

  uploadForm() {
    return(
      <div className='upload'>
        <div className='upload-page-submit'>
          <div className='upload-form-box'>
            <h1 className='upload-form-title'>Edit photo:</h1>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input
                type='text'
                value={this.state.img_title}
                placeholder='Add a title'
                onChange={this.handleUpdate('img_title')} />
              <textarea
                value={this.state.img_description}
                placeholder='Add a description'
                onChange={this.handleUpdate('img_description')} />
              <input type='submit' value='Upload Photo' />
            </form>
            <button onClick={() => this.setState(this.nullState())}>
              Clear</button>
          </div>
          <div className='upload-preview-box'>
            <img className='upload-preview-img' src={this.state.photoUrl} />
            <div className='upload-preview-title'>{this.state.img_title}</div>
            <div className='upload-preview-description'>{this.state.img_description}</div>
          </div>
        </div>
      </div>
    );
  }

  photoSelect() {
    return(
      <div className='upload'>
        <div className='upload-page-select'>
          <div className='upload-select-box'>
            <h1>Upload a photo</h1>
            <label htmlFor='file-upload' className='upload-file-button'>
              Choose file
              <input id='file-upload' type='file' accept='image/*'
                onChange={this.handleFile.bind(this)}/>
            </label>
          </div>
        </div>
      </div>
    );
  }


  render() {
    return (this.state.photoUrl) ? (
      this.uploadForm()
    ) : (
      this.photoSelect()
    );
  }
}


export default PhotoUpload;
