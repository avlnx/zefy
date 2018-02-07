import React, { Component } from 'react';
import { Heading, Title, Button, Text, Screen, View, Caption } from '@shoutem/ui';
import { PaddedScreen } from '../components/common';

export default class HelloScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <PaddedScreen styleName="full-screen">
        <View style={{ flex: 1, justifyContent: 'center'}}>
          <Heading styleName="h-center" style={{ fontSize: 56, lineHeight: 64}}>
            ZEFY
          </Heading>
          <Title styleName="h-center">
             Uma solução completa de self-checkout orgulhosamente Brasileira.
          </Title>
        </View>
        <Button
          style={{ backgroundColor: 'black', borderWidth: 0 }}
          onPress={() => navigate('Login', { name: 'Login'})}>
          <Text style={{ color: 'white' }}>VAMOS COMEÇAR</Text>
        </Button>
        <Caption styleName="h-center">
          Clique em "Vamos Começar" para criar sua conta ou fazer login.
        </Caption>
      </PaddedScreen>
    );
  }
}
