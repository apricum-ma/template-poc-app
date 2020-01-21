import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import KnowYourCustomer from '../components/pages/KnowYourCustomer';
// import { reduxForm } from 'redux-form';

// import { fetchCardDetails } from './../actions/home';
// const formName = "Home";
const mapStateToProps = state => {
  return {
    displayMessage: state.home.displayMessage
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(KnowYourCustomer);