import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './../components/pages/Login';
import { reduxForm } from 'redux-form';

import { userLogin } from './../actions/login';
const formName = "Login";
const mapStateToProps = state => {
  return {
    updateRoute: state.login.updateRoute,
    accountNumber: state.login.accountNumber
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    userLogin
	}, dispatch);
}

export const LoginForm = reduxForm({
  form: formName,
  destroyOnUnmount: false,
})(Login);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);