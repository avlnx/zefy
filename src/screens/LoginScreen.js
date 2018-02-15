import React, {Component} from 'react';
import {Container, Spinner} from '../components/common';
import LoginForm from '../components/LoginForm';
import {connect} from 'react-redux';
import {firebase} from 'react-native-firebase';
import {actions} from '../reducers/actions';

const mapStateToProps = (state) => ({
  loading: state.loading,
  user: state.user,
});

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
    };
  }

  loginUser() {
    const {email, password} = this.state;
    const {dispatch} = this.props;
    dispatch(actions.updateLoading(true));
    firebase.auth().
        signInAndRetrieveDataWithEmailAndPassword(email, password).
        catch((e) => {
          alert(e);
          dispatch(actions.updateLoading(false));
        }).
        then((user) => {
          dispatch(actions.updateLoading(false));
          dispatch(actions.updateUser(user));
        });
  }

  createUser() {
    const {email, password} = this.state;
    const {dispatch} = this.props;
    dispatch(actions.updateLoading(true));
    firebase.auth().
        createUserAndRetrieveDataWithEmailAndPassword(email, password).
        catch((e) => {
          alert(e);
          dispatch(actions.updateLoading(false));
        }).
        then((user) => {
          dispatch(actions.updateLoading(false));
          dispatch(actions.updateUser(user));
        });
  }

  updateUserEmailInput(email) {
    this.setState({email});
  }

  updateUserPasswordInput(password) {
    this.setState({password});
  }

  render() {
    const {loading} = this.props;

    if (loading) return <Spinner/>;

    return (
        <Container>
          <LoginForm currentEmail={this.state.email}
                     currentPassword={this.state.password}
                     loginUserAction={this.loginUser}
                     createUserAction={this.createUser}
                     updateUserEmailInput={this.updateUserEmailInput}
                     updateUserPasswordInput={this.updateUserPasswordInput}/>
        </Container>
    );
  }
}

export default connect(mapStateToProps)(LoginScreen);