import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Transfer from '../components/pages/Transfer';
const mapStateToProps = state => {
  return {
    displayMessage: state.home.displayMessage
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Transfer);