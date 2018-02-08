import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
// import firebase from 'firebase';

import HelloScreen from './src/screens/HelloScreen';
import LoginScreen from './src/screens/LoginScreen';

const RootStack = StackNavigator({
  Hello: { screen: HelloScreen },
  Login: { screen: LoginScreen },
});

export default class App extends Component {
  componentWillMount() {
    // firebase.initializeApp({
    //   apiKey: 'AIzaSyC8yEZ0ba9QpaDZe1GbVfhVnA6tRUMV5Eo',
    //   authDomain: 'zefy-13373.firebaseapp.com',
    //   databaseURL: 'https://zefy-13373.firebaseio.com',
    //   projectId: 'zefy-13373',
    //   storageBucket: 'zefy-13373.appspot.com',
    //   messagingSenderId: '564276063339'
    // });
  }

  render() {
    return <RootStack />;
  }
}
