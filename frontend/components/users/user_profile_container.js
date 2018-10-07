import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchAllPhotos } from '../../actions/photo_actions';
import { fetchAllAlbums, deleteAlbum } from '../../actions/album_actions';
import UserProfile from './user_profile';

const msp = (state, ownProps) => ({
  currentUserId: state.session.currentUserId,
  profileUserId: ownProps.match.params.userId,
  profileUser: state.entities.users[ownProps.match.params.userId],
  profilePhotos: state.entities.photos,
  profileAlbums: state.entities.albums,
  errors: state.errors
});

const mdp = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchPhotos: id => dispatch(fetchAllPhotos(id)),
  fetchAllAlbums: id => dispatch(fetchAllAlbums(id)),
  deleteAlbum: id => dispatch(deleteAlbum(id))
});

export default connect(msp, mdp)(UserProfile);