import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import { Heading, Title, Button, Text, Screen, View } from '@shoutem/ui';

export default class HelloScreen extends Component {
  static navigationOptions = {
    title: 'Zefy',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Screen>
        <Heading styleName="bold, h-center">
          Zefy é uma solução de self-checkout totalmente Brasileira.
        </Heading>
        <Title>
          Clique em "Vamos Começar" para criar sua conta ou fazer login.
        </Title>
        <Button styleName="dark" onPress={() => navigate('Login', { name: 'Login'})}>
          <Text>Vamos Começar</Text>
        </Button>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  wrapperView: {
    flex: 1
  }
});
