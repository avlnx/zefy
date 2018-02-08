import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

const Caption = (props) => {
  return (
    <Text style={{fontSize: 14, color: '#555', paddingBottom: 10, marginLeft: 15, marginRight: 15}}>
      { props.children }
    </Text>
  );
}

export { Caption };
