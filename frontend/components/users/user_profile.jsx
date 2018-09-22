import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import ProfileHeader from './profile_components/profile_header';
import ProfileStream from './profile_components/profile_stream';
import AlbumIndex from '../albums/album_index';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.loadUserData();
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.profileUserId !== this.props.profileUserId) {
      this.setState({ loading: true }, () => this.loadUserData());
      window.scrollTo(0, 0);
    }
  }

  loadUserData() {
    const userId = this.props.match.params.userId;
    this.props.fetchUser(userId);
    this.props.fetchPhotos(userId).then(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    const url = this.props.match.url;
    const photoCount = this.props.profilePhotos.length;

    if (this.state.loading || !this.props.dataReady) {
      return <h1 className='user-profile'>Loading...</h1>;
    }

    console.log("rendering user profile...");

    return (
      <div className='user-profile'>

        <ProfileHeader user={this.props.profileUser} photoCount={photoCount} />

        <div className='user-profile-links'>
          <NavLink exact to={`${url}`} >Photostream</NavLink>
          <NavLink exact to={`${url}/albums`} >Albums</NavLink>
        </div>

        <ProtectedRoute path={`${url}/albums`} component={AlbumIndex} />
        <ProtectedRoute exact path={`${url}`} component={
            () => <ProfileStream 
                    photos={this.props.profilePhotos} 
                    currentUserId={this.props.currentUser.id} /> } />
      </div>
    );
  }
}


export default UserProfile;