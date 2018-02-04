import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';

export default class HelloScreen extends Component {
  static navigationOptions = {
    title: 'Zefy',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.wrapperView}>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Text style={styles.messageText}>
            Zefy é uma solução de self-checkout totalmente Brasileira.
          </Text>
          <Text style={styles.instructions}>
            Clique em "Vamos Começar" para criar sua conta ou fazer login.
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Vamos começar"
            onPress={() => navigate('Login', { name: 'Login'})} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperView: {
    flex: 1
  },
  messageText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    padding: 20
  },
  instructions: {
    color: '#777',
    fontSize: 18,
    textAlign: 'center',
    padding: 20
  },
  buttonWrapper: {
    flex: 1
  }
});
