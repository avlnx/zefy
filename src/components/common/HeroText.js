import React, { Component } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

const HeroText = (props) => {
  return (
    <Text style={styles.textStyles}>
      { props.children }
    </Text>
  );
}

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 48,
    fontWeight: '600',
    lineHeight: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#555',
    paddingTop: 20,
    paddingBottom: 20
  },
});

export { HeroText };
