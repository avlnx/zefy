import React, { Component } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

const TitleText = (props) => {
  return (
    <Text style={styles.textStyles}>
      { props.children }
    </Text>
  );
}

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#333',
  },
});

export { TitleText };
