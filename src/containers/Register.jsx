import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Register from '../components/pages/Register';
import { reduxForm } from 'redux-form';

import { registerUser } from '../actions/register';
const formName = "Register";
const mapStateToProps = state => {
  return {
    displayMessage: state.register.displayMessage
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
		registerUser
	}, dispatch);
}

export const RegForm = reduxForm({
  form: formName,
  destroyOnUnmount: false,
})(Register);

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);