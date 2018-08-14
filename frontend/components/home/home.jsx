import React from 'react';
import PhotoIndexContainer from '../photos/photo_index_container';

class Home extends React.Component {

  render() {
    return (
      <div className='home-page'>
        <h1>Explore!</h1>
        <PhotoIndexContainer />
      </div>
    );
  }
}

export default Home;
