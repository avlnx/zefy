import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import firebase from 'firebase';
import { View, Button, Text, TextInput, Screen, Title, Divider } from '@shoutem/ui';
import { Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  onButtonPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Title style={{ textAlign: 'center' }}>
          Faça login para personalizar sua experiência.
        </Title>
        <Input
          label={'Email'}
          value={this.state.email}
          placeholder={'examplo@mail.com'}
          autoCorrect={false}
          onChangeText={ email => this.setState({ email })}
          />
        <Divider />
        <Input
          label={'Senha'}
          placeholder={'suasenhasegura'}
          secureTextEntry
          value={this.state.password}
          onChangeText={ password => this.setState({ password })}
          style={{ backgroundColor: 'gray' }}
          />
        <Divider />
        <Button onPress={this.onButtonPress.bind(this)} styleName='dark'><Text>Entrar</Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default LoginForm;
