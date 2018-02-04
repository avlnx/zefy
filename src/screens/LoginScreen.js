import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.wrapperView}>
        <Text style={styles.greeting}>
        Faça login para personalizar sua experiência.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapperView: {
    flex: 1
  },
  greeting: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    padding: 20
  }
});
