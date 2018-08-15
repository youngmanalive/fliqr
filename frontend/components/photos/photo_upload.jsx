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

  hanldeUpdate(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleDescription() {
    return (this.state.img_description.length) ? (
      this.state.img_description
    ) : (
      null
    );
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('photo[img_title]', this.state.img_title);
  //   formData.append('photo[img_description]', this.handleDescription());
  // }

  uploadForm() {
    return(
      <form>
        <input type='file' accept='image/*'/>
      </form>
    );
  }

  render() {
    return (
      <div className='upload-page'>
        <h1>Drag & drop a photo here</h1>
        <h1>or</h1>
        {this.uploadForm()}
      </div>
    );
  }
}

export default PhotoUpload;
