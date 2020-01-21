import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddAccount from '../components/pages/AddAccount';
// import { reduxForm } from 'redux-form';

// import { fetchCardDetails } from './../actions/home';
// const formName = "Home";
const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAccount);