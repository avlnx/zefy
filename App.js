// Libraries
import React, {Component} from 'react';
import {StackNavigator, addNavigationHelpers} from 'react-navigation';
import firebase from 'react-native-firebase';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import actions from './src/reducers/actions';

// Custom
import HelloScreen from './src/screens/HelloScreen';
import LoginScreen from './src/screens/LoginScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import {Spinner} from './src/components/common';

let store = createStore(reducers);

const mapStateToProps = (state) => ({
  loading: state.loading,
  user: state.user,
});

const NavigationOptions = {
  headerStyle: {
    backgroundColor: '#00e640',
  },
  headerTintColor: 'black',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const LoggedOutStack = StackNavigator({
      Hello: {screen: HelloScreen},
      Login: {screen: LoginScreen},
    },
    {
      navigationOptions: NavigationOptions,
    });

const LoggedInStack = StackNavigator({
      OnboardingScreen: {screen: OnboardingScreen},
    },
    {
      navigationOptions: NavigationOptions,
    });

class App extends Component {

  componentWillMount() {
    const {dispatch} = this.props;

    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      // this.setState({
      //     loading: false,
      //     user,
      // });
      dispatch(actions.updateLoading(false));
      dispatch(actions.updateUser(user));
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {

    const {loading, user, navigationState, dispatch} = this.props;

    // The application is initialising
    if (loading) return <Spinner/>;

    // The user is an Object, so they're logged in
    if (user) return <Provider store={store}><LoggedInStack
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }/></Provider>;

    // The user is null, so they're logged out
    return <Provider store={store}><LoggedOutStack
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }/></Provider>;
  }
}

export default connect(mapStateToProps)(App);
