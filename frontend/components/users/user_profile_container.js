import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchAllPhotos } from '../../actions/photo_actions';
import UserProfile from './user_profile';

const filterUserPhotos = (state) => {

};

const msp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  profileUser: state.entities.users[ownProps.match.params.userId],
  profilePhotos: state.entities.photos,
  profileUserId: ownProps.match.params.userId,
  dataReady: Boolean(state.entities.users[ownProps.match.params.userId])
});

const mdp = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchPhotos: id => dispatch(fetchAllPhotos(id))
});

export default connect(msp, mdp)(UserProfile);