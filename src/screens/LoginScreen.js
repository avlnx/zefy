import React, { Component } from 'react';
import { Screen } from '@shoutem/ui';
import LoginForm from '../components/LoginForm';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Screen styleName="paper">
        <LoginForm />
      </Screen>
    )
  }
}
