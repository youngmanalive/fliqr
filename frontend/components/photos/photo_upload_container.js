import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import PhotoUpload from './photo_upload';

const msp = state => ({
  userId: state.session.currentUserId
});

const mdp = dispatch => ({
  createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(msp, mdp)(PhotoUpload);
