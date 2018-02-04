import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

const Caption = (props) => {
  return (
    <Text style={{fontSize: 14, color: '#555'}}>
      { props.children }
    </Text>
  );
}

export { Caption };
