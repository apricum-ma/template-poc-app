import React, { Component } from 'react';
import CameraFeed from '../molecules/CameraFeed';
import Button from '../atoms/Button';
const uploadImage = async file => {
  const formData = new FormData();
  formData.append('file', file);

  // Connect to a seaweedfs instance
};
class KnowYourCustomer extends Component {
  state = {
    userVerified: false
  }
  verifyUserHandler = () => {
    this.setState({ userVerified: true})
  }

  moveToLogin = () => {
    this.props.history.push('/');
  }
  
  render() {
    const { userVerified } = this.state;
    return <div>
        KnowYourCustomer
        { userVerified ? <div>
          You have Successfully verified yourself!
          <Button onClick={this.moveToLogin}>Try Login</Button>
        </div> :
          <div>
            <CameraFeed sendFile={uploadImage} />
            <Button onClick={this.verifyUserHandler}>Complete KYC</Button>
          </div>
        }
    </div>
  }
}

export default KnowYourCustomer;