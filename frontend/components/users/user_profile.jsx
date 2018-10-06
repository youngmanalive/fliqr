import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
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
    ]).then(() => this.setState({ loading: false }));
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
    return (
      <div className='user-profile-errors'>
        <div className='error-message'>{this.props.errors.users[0]}</div>
        <Link to={`/users/${this.props.currentUserId}`}>Close</Link>
      </div>
    );
  }

  render() {
    const dataReady = Boolean(this.props.profileUser);

    if (this.props.errors.users.length) return this.userNotFound();
    if (this.state.loading || !dataReady) return this.loading();

    const url = this.props.match.url;

    const profileHeader = <ProfileHeader 
                            user={this.props.profileUser} 
                            photoCount={this.props.profilePhotos.length} />;
    const profileLinks = <div className='user-profile-links'>
                           <NavLink exact to={`${url}`} >Photostream</NavLink>
                           <NavLink exact to={`${url}/albums`} >Albums</NavLink>
                         </div>;
    const profileStream = <ProfileStream {...this.props} />;
    const albumIndex = <AlbumIndex {...this.props} />;
    const albumShow = <AlbumShow {...this.props} />;



    return (
      <div className='user-profile'>
        <Switch>
          <Route path={`${url}/albums/:albumId`} component={() => albumShow} />
          <Route path={`${url}`} component={() => profileHeader} />
        </Switch>

        <Route exact path={`${url}`} render={() => profileLinks} />
        <Route exact path={`${url}/albums`} render={() => profileLinks} />

        <Route exact path={`${url}`} component={() => profileStream} />
        <Route exact path={`${url}/albums`} component={() => albumIndex} />
      </div>
    );
  }
}

export default UserProfile;