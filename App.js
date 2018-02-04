import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import HelloScreen from './src/screens/HelloScreen';
import LoginScreen from './src/screens/LoginScreen';

const RootStack = StackNavigator({
  Hello: { screen: HelloScreen },
  Login: { screen: LoginScreen },
});

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
