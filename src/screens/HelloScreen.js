import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';
import { Container, HeroText, TitleText } from '../components/common';

export default class HelloScreen extends Component {
  static navigationOptions = {
    title: 'Zefy',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <View style={{flex: 4, justifyContent: 'center'}}>
          <HeroText>
            Zefy é uma solução de self-checkout totalmente Brasileira.
          </HeroText>
          <TitleText>
            Clique em "Vamos Começar" para criar sua conta ou fazer login.
          </TitleText>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Button
            title="Vamos começar"
            onPress={() => navigate('Login', { name: 'Login'})} />
        </View>
      </Container>
    );
  }
}
