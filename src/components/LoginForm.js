import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Input, TitleText } from './common';

class LoginForm extends Component {
  render() {
    return (
      <View>
        <TitleText>
        Faça login para personalizar sua experiência.
      </TitleText>
        <Input />
        <Button title='Entrar' />
      </View>
    );
  }
}

export default LoginForm;
