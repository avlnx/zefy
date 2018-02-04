import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Button, Text, TextInput, Screen, Title, Divider } from '@shoutem/ui';
import { Input } from './common';

class LoginForm extends Component {
  state = { text: '' };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Title style={{ textAlign: 'center' }}>
          Faça login para personalizar sua experiência.
        </Title>
        <Input
          label={'Email'}
          value={this.state.text}
          placeholder={'examplo@mail.com'}
          onChangeText={ text => this.setState({ text })}
          />
        <Divider />
        <Input label={'Senha'} placeholder={'suasenhasegura'} secureTextEntry />
        <Divider />
        <Button styleName='dark'><Text>Entrar</Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default LoginForm;
