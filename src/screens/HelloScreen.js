import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import { Container, Caption, TextTag } from '../components/common';
import { Button, Text } from 'react-native-elements';

export default class HelloScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={{ backgroundColor: '#00e640'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TextTag h1>
            ZEFY
          </TextTag>
          <TextTag h2>
             Uma solução completa de self-checkout orgulhosamente Brasileira.
          </TextTag>
        </View>
        <View>
          <Button
            large
            iconRight={{name: 'navigate-next'}}
            buttonStyle={{ backgroundColor: '#000'}}
            containerStyle={{ marginLeft: 0, marginRight: 0}}
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
