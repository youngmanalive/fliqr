import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
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
    console.log("comp did mount");
    this.loadUserData();
  }

  componentDidUpdate(prevProps) {
    console.log("XXXXXXXXXXX", prevProps.profileUserId, this.props.profileUserId);
    if (prevProps.profileUserId !== this.props.profileUserId) {
      this.setState({ loading: true }, () => {
        this.loadUserData();
      });
    }
  }

  loadUserData() {
    console.log("loading user data");
    const userId = this.props.match.params.userId;
    this.props.fetchUser(userId).then(() => console.log("user loaded"));
    this.props.fetchPhotos(userId)
      .then(() => {
        console.log("photos loaded");
        return this.setState({
          loading: false,
        });
      });
  }

  render() {
    const url = this.props.match.url;
    const loading = <h1 className='user-profile'>Loading...</h1>;

    console.log(this.props.dataReady);
    console.log(this.prevProps)

    if (this.state.loading || !this.props.dataReady) {
      console.log("loading");
      return loading;
    } 
    // else if (!this.props.dataReady) {
    //   this.loadUserData();
    //   return loading;
    // }

    console.log("photos: ", this.props.profilePhotos);

    console.log("rendering user profile...");

    return (
      <div className='user-profile'>

        <ProfileHeader user={this.props.profileUser} />

        <div className='user-profile-links'>
          <NavLink exact to={`${url}`}>Photostream</NavLink>
          <NavLink exact to={`${url}/albums`}>Albums</NavLink>
        </div>

        <ProtectedRoute path={`${url}/albums`} component={AlbumIndex} />
        <ProtectedRoute exact path={`${url}`} component={
          () => <ProfileStream photos={this.props.profilePhotos} /> } />

      </div>
    );
  }
}


export default UserProfile;