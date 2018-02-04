import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Caption, TextInput, Container } from '@shoutem/ui';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry = false }) => {
  return (
    <View>
      <Caption>{ label }</Caption>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={{  }}
        secureTextEntry={secureTextEntry}
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
