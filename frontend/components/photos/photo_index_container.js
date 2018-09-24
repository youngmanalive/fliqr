import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { fetchAllPhotos } from '../../actions/photo_actions';

const msp = state => ({
  currentUserId: state.session.currentUserId,
  photos: Object.values(state.entities.photos).reverse()
});

const mdp = dispatch => ({
  fetchAllPhotos: () => dispatch(fetchAllPhotos())
});

export default connect(msp, mdp)(PhotoIndex);
