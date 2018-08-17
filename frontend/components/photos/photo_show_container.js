import { connect } from 'react-redux';
import { fetchPhoto, deletePhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';

const msp = (state, ownProps) => ({
    currentUserId: state.session.currentUserId,
    photo: state.entities.photos[ownProps.match.params.photoId]
});

const mdp = dispatch => ({
  fetchPhoto: id => dispatch(fetchPhoto(id)),
  deletePhoto: id => dispatch(deletePhoto(id))
});

export default connect(msp, mdp)(PhotoShow);
