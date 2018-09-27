import { connect } from 'react-redux';
import { fetchAllPhotos } from '../../actions/photo_actions';
import AlbumCreate from './album_create';

const msp = state => ({
  photos: state.entities.photos
});

const mdp = dispatch => ({
  fetchAllPhotos: id => dispatch(fetchAllPhotos(id))
});

export default connect(msp, mdp)(AlbumCreate);