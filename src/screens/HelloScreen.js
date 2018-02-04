import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';
import { Container, HeroText, TitleText, Caption } from '../components/common';

export default class HelloScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <HeroText>
            ZEFY
          </HeroText>
          <TitleText>
             Uma solução completa de self-checkout orgulhosamente Brasileira.
          </TitleText>
        </View>
        <View>
          <Button
            style={{ backgroundColor: 'white' }}
            title="Vamos começar"
            onPress={() => navigate('Login', { name: 'Login'})} />
          <Caption>
            Clique em "Vamos Começar" para criar sua conta ou fazer login.
          </Caption>
        </View>
      </Container>
    );
  }
}
