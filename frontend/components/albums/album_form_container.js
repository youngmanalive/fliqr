import { connect } from 'react-redux';
import { createAlbum, fetchAlbum, updateAlbum } from '../../actions/album_actions';
import { fetchAllPhotos } from '../../actions/photo_actions';
import AlbumForm from './album_form';

const msp = (state, ownProps) => ({
  photos: Object.values(state.entities.photos),
  album: state.entities.albums[ownProps.match.params.albumId],
  currentUserId: state.session.currentUserId,
  errors: state.errors
});

const mdp = dispatch => ({
  fetchAllPhotos: id => dispatch(fetchAllPhotos(id)),
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  updateAlbum: (album, id) => dispatch(updateAlbum(album, id)),
  createAlbum: formData => dispatch(createAlbum(formData))
});

export default connect(msp, mdp)(AlbumForm);