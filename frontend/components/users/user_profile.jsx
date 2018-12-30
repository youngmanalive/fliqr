import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ProfileHeader from './profile_components/profile_header';
import ProfileStream from './profile_components/profile_stream';
import AlbumIndex from '../albums/album_index';
import AlbumShow from '../albums/album_show';

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
    Promise.all([
      this.props.fetchUser(userId),
      this.props.fetchPhotos(userId),
      this.props.fetchAllAlbums(userId)
    ]).then(() => this.setState({ loading: false }, () => {
      const account = this.props.currentUserId == userId
        ? "My profile" : this.props.profileUser.username;
      document.title = `Fliqr - ${account}`;
    }));
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

  userNotFound() {
    document.title = 'Fliqr - User not found';
    return (
      <div className='user-profile-errors'>
        <div className='error-message'>{this.props.errors.users[0]}</div>
        <Link to={`/users/${this.props.currentUserId}`}>Close</Link>
      </div>
    );
  }

  render() {
    const {
      match: { url },
      location,
      profileUser,
      profilePhotos,
      errors
    } = this.props;

    if (errors.users.length) return this.userNotFound();
    if (this.state.loading || !profileUser) return this.loading();

    const isAlbumShow = location.pathname.split('/').length >= 5;
    const photoCount = Object.keys(profilePhotos).length;

    if (isAlbumShow) return (
      <div className='user-profile'>
        <AlbumShow {...this.props} />
      </div>
    );

    return (
      <div className='user-profile'>
        <ProfileHeader user={profileUser} photoCount={photoCount} />
        <div className='user-profile-links'>
          <NavLink exact to={`${url}`}>Photostream</NavLink>
          <NavLink exact to={`${url}/albums`}>Albums</NavLink>
        </div>
        <Route exact path={`${url}`} render={() => <ProfileStream {...this.props} />} />
        <Route exact path={`${url}/albums`} render={() => <AlbumIndex {...this.props} />} />
      </div>
    );
  }
}

export default UserProfile;