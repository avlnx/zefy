import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Caption, TextInput, Container } from '@shoutem/ui';

const Input = (
  {
    label, value, onChangeText, placeholder, style = {},
    secureTextEntry = false, autoCorrect = true
  }) => {
  return (
    <View>
      <Caption>{ label }</Caption>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
        style={style}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {

  },
  containerStyle: {

  }
});

export { Input };
