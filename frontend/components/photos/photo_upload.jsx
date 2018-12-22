import React from 'react';
import { processImage } from '../../util/image_processing_util';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.nullState();
  }

  nullState() {
    return {
      imgTitle: '',
      imgDescription: '',
      photoFile: null,
      photoUrl: null,
      thumbBlob: null,
      thumbWidth: null,
      thumbHeight: null,
      loading: false,
      errors: null
    };
  }

  handleUpdate(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      // create thumbnail
      processImage(fileReader.result, imgData => {
        const newState = Object.assign(
          {}, this.state, imgData, {
            photoFile: file,
            photoUrl: fileReader.result
          }
        );

        this.setState(newState);
      });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true, errors: null }, () => {
      const formData = new FormData();
      formData.append('photo[img_title]', this.state.imgTitle);
      formData.append('photo[img_description]', this.state.imgDescription);
      formData.append('photo[file]', this.state.photoFile);
      formData.append('photo[thumb]', this.state.thumbBlob);
      formData.append('photo[thumb_width]', this.state.thumbWidth);
      formData.append('photo[thumb_height', this.state.thumbHeight);

      this.props.createPhoto(formData)
        .then(
          () => this.props.history.replace(`/users/${this.props.userId}`),
          err => this.setState({ loading: false, errors: err.errors })
        );
    });
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

  uploadForm() {
    const hasErrors = Boolean(this.state.errors);
    const errorStyle = hasErrors ? { border: '1px solid red' } : {};
    
    return(
      <div className='upload'>
        {this.state.loading ? this.loading() : null}
        <div className='upload-page-submit'>
          <div className='upload-form-box'>
            <h1 className='upload-form-title'>Edit photo:</h1>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input
                style={errorStyle}
                type='text'
                value={this.state.imgTitle}
                placeholder='Add a title'
                onChange={this.handleUpdate('imgTitle')} />
              <textarea
                value={this.state.imgDescription}
                placeholder='Add a description'
                onChange={this.handleUpdate('imgDescription')} />
              <input type='submit' value='Upload Photo' />
            </form>
            <button onClick={() => this.setState(this.nullState())}>
              Clear
            </button>
          </div>
          <div className='upload-preview-box'>
            <img className='upload-preview-img' src={this.state.photoUrl} />
            <div className='upload-preview-title'>{this.state.imgTitle}</div>
            <div className='upload-preview-description'>{this.state.imgDescription}</div>
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
    return (this.state.photoFile) ? (
      this.uploadForm()
    ) : (
      this.photoSelect()
    );
  }
}


export default PhotoUpload;
