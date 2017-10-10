import { connect } from 'react-redux';
import * as authActions from '../../redux/modules/auth';
import Login from './Login';

const mapStateToProps = state => {
  const user = { user: state };
  // const user = { user: state.auth.user };
  return user;
};

export default connect(mapStateToProps, authActions)(Login);
