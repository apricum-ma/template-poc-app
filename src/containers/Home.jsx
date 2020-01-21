import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './../components/pages/Home';
import { reduxForm } from 'redux-form';

import { fetchCardDetails } from './../actions/home';
const formName = "Home";
const mapStateToProps = state => {
  return {
    displayMessage: state.home.displayMessage
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
		fetchCardDetails
	}, dispatch);
}

export const RegForm = reduxForm({
  form: formName,
  destroyOnUnmount: false,
})(Home);

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);