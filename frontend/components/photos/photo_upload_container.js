import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import PhotoUpload from './photo_upload';


const mdp = dispatch => ({
  createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(null, mdp)(PhotoUpload);
