import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddAccount from '../components/pages/AddAccount';
import { reduxForm } from 'redux-form';

import { addAccount } from './../actions/addAccount';
const formName = "AddAccount";
const mapStateToProps = state => {
  return {
    token: state.login.token,
    custNumber: state.login.custNumber
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addAccount
	}, dispatch);
}

export const AddAccForm = reduxForm({
  form: formName,
  destroyOnUnmount: false,
})(AddAccount);

export default connect(mapStateToProps, mapDispatchToProps)(AddAccForm);