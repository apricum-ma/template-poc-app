import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './../components/pages/Home';
import { fetchCardDetails } from './../actions/home';

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);