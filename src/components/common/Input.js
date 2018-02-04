import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
} from 'react-native';
import { Caption } from '.';

const Input = (props) => {
  return (
    <View>
      <Caption>{props.label}</Caption>
      <TextInput style={styles.inputStyles} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyles: {
    width: 300,
    height: 30,
    padding: 5,
    backgroundColor: '#fff'
  },
});

export { Input };
