import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Deposit from '../components/pages/Deposit';
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

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);