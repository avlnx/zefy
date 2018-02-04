import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import { PaddedScreen } from '../components/common';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <PaddedScreen styleName="paper">
        <LoginForm />
      </PaddedScreen>
    )
  }
}
