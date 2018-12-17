import React from 'react';
import PhotoIndex from '../photos/photo_index';

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    document.title = 'Fliqr - Explore';
    this.props.fetchAllPhotos()
      .then(() => this.setState({ loading: false }));
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
    if (this.state.loading) return this.loading();

    const { photos, currentUserId } = this.props;

    return (
      <div className='explore-page'>
        <h1>Explore</h1>
        <PhotoIndex photos={photos} currentUserId={currentUserId}/>
      </div>
    );
  }
}

export default Explore;
