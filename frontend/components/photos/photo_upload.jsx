import React from 'react';
import { processImage } from '../../util/image_processing_util';

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
      photoUrl: null,
      width: null,
      height: null,
      thumbBlob: null,
      thumbWidth: null,
      thumbHeight: null,
      loading: false
    };
  }

  handleUpdate(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      processImage (fileReader.result, imgData => {
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
    const formData = new FormData();
    formData.append('photo[img_title]', this.state.img_title);
    formData.append('photo[img_description]', this.state.img_description);
    formData.append('photo[file]', this.state.photoFile);
    formData.append('photo[thumb]', this.state.thumbBlob);
    formData.append('photo[thumb_width]', this.state.thumbWidth);
    formData.append('photo[thumb_height', this.state.thumbHeight);

    this.props.createPhoto(formData)
      .then(() => this.props.history.replace(`/users/${this.props.userId}`));
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
              Clear
            </button>
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
    return (this.state.photoFile) ? (
      this.uploadForm()
    ) : (
      this.photoSelect()
    );
  }
}


export default PhotoUpload;
