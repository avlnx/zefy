import React, {Component} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import firebase from 'react-native-firebase';
import {connect} from 'react-redux';

import {Container, Spinner, TextTag} from '../components/common';
import {actions} from '../reducers/actions';

const mapStateToProps = (state) => ({
  loading: state.loading,
  user: state.user,
});

class OnboardingScreen extends Component {

  static navigationOptions = {
    title: 'Crie seu primeiro ponto de vendas',
  };

  signOut() {
    const {dispatch} = this.props;
    dispatch(actions.updateLoading(true));
    // this.setState({signingOut: true});
    firebase.auth().signOut().catch((e) => {
      alert(e);
    }).then(() => {
      dispatch(actions.updateLoading(false));
      dispatch(actions.updateUser(null));
      // alert('Bye bye now');
    });

  }

  render() {
    const {loading} = this.props;

    if (!loading) return (
        <Container>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TextTag h1>Olá!</TextTag>
            <TextTag h2>Parece que você ainda não criou um ponto de
              vendas.</TextTag>
          </View>
          <Button
              buttonStyle={{backgroundColor: 'black'}}
              style={{marginBottom: 15}}
              title={'Cadastrar meu primeiro ponto de vendas'}/>
          <Button
              transparent
              color={'black'}
              onPress={this.signOut.bind(this)}
              title={'Sair'}/>
        </Container>
    );

    return (
        <Container>
          <Spinner/>
        </Container>
    );
  }
}

export default connect(mapStateToProps)(OnboardingScreen);