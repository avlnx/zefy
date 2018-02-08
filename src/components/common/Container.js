import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

const Container = (props) => {
  return (
    <View style={[styles.wrapperView, props.style, {backgroundColor: props.light ? '#eee' : '#00e640'}]}>
      { props.children }
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperView: {
    flex: 1,
    padding: 15,
    // backgroundColor: props.light ? '#eee' : '#00e640'
    // backgroundColor: '#eee'
  },
});

export { Container };
