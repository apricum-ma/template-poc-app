import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Statemnet from '../components/pages/Statement';
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

export default connect(mapStateToProps, mapDispatchToProps)(Statemnet);