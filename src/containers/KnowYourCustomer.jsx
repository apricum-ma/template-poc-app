import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import KnowYourCustomer from '../components/pages/KnowYourCustomer';
// import { reduxForm } from 'redux-form';

// const formName = "Home";
const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(KnowYourCustomer);