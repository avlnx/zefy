import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet
} from 'react-native';

const Input = (props) => {
  return (
    <TextInput style={styles.inputStyles} />
  );
}

const styles = StyleSheet.create({
  inputStyles: {
    height: 20,
    width: 200,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#eee',
    backgroundColor: '#fff'
  },
});

export { Input };
