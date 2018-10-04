import { connect } from 'react-redux';
import { createAlbum } from '../../actions/album_actions';
import { fetchAllPhotos } from '../../actions/photo_actions';
import AlbumCreate from './album_create';

const msp = state => ({
  photos: Object.values(state.entities.photos),
  currentUserId: state.session.currentUserId
});

const mdp = dispatch => ({
  fetchAllPhotos: id => dispatch(fetchAllPhotos(id)),
  createAlbum: formData => dispatch(createAlbum(formData))
});

export default connect(msp, mdp)(AlbumCreate);