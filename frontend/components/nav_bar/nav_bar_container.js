import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';

const msp = ({ session, entities: { users } }) => ({

});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});
