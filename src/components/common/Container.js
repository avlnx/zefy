import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

const Container = (props) => {
  return (
    <View style={styles.wrapperView}>
      { props.children }
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperView: {
    flex: 1,
    padding: 10
  },
});

export { Container };
