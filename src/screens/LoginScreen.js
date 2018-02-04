import React, { Component } from 'react';
import { Container } from '../components/common';
import LoginForm from '../components/LoginForm';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <LoginForm />
      </Container>
    )
  }
}
