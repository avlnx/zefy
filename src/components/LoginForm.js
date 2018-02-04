import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Button, Text, TextInput, Screen, Title } from '@shoutem/ui';

class LoginForm extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Title style={{ textAlign: 'center' }}>
          Faça login para personalizar sua experiência.
        </Title>
        <TextInput placeholder={'Email'} />
        <TextInput placeholder={'Senha'} secureTextEntry />
        <Button styleName='dark'><Text>Entrar</Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperView: {
    flex: 1
  }
});

export default LoginForm;
