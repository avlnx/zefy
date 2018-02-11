import React, {Component} from 'react';

import {StackNavigator} from 'react-navigation';
import firebase from 'react-native-firebase';

import HelloScreen from './src/screens/HelloScreen';
import LoginScreen from './src/screens/LoginScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import { Spinner } from './src/components/common';

const NavigationOptions = {
    headerStyle: {
        backgroundColor: '#00e640',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
};

const LoggedOutStack = StackNavigator({
        Hello: {screen: HelloScreen},
        Login: {screen: LoginScreen},
    },
    {
        navigationOptions: NavigationOptions
    });

const LoggedInStack = StackNavigator({
        OnboardingScreen: {screen: OnboardingScreen},
    },
    {
        navigationOptions: NavigationOptions
    });

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            user: null
        };
    }

    componentWillMount() {
        this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                loading: false,
                user,
            });
        });
    }

    componentWillUnmount() {
        this.authSubscription();
    }

    render() {
        // The application is initialising
        if (this.state.loading) return <Spinner />;

        // The user is an Object, so they're logged in
        if (this.state.user) return <LoggedInStack />;

        // The user is null, so they're logged out
        return <LoggedOutStack />;
    }
}
