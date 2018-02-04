import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, TextInput } from 'react-native';

class LoginForm extends Component {
  render() {
    return (
      <View>
        <Text style={styles.greeting}>
        Faça login para personalizar sua experiência.
        </Text>
        <TextInput style={{ height: 20, width: 100 }} />
        <Button title='Entrar' />
      </View>
    );
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

export default LoginForm;
