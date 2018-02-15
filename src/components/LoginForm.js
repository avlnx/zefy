import React, {Component} from 'react';
import {View} from 'react-native';
import {TextTag} from './common';
import {
  FormLabel,
  Button,
  FormInput,
} from 'react-native-elements';

class LoginForm extends Component {

  // constructor() {
  //   super();
  //   const { loginUserAction, createUserAction } = this.props;
  //   this.state = {
  //     email: null,
  //     password: null,
  //   };
  // }

  // loginUser() {
  //   const {email, password} = this.state;
  //   this.setState({loading: true});
  //   firebase.auth().
  //       signInAndRetrieveDataWithEmailAndPassword(email, password).
  //       catch((e) => {
  //         alert(e);
  //         this.setState({loading: false});
  //       }).
  //       then((user) => {
  //         console.log(user);
  //         console.log(user.uid);
  //         // this.setState({ loading: false})
  //         // if (user) alert('Welcome! You are logged in now');
  //       });
  // }
  //
  // createUser() {
  //   const {email, password} = this.state;
  //   this.setState({loading: true});
  //   firebase.auth().
  //       createUserAndRetrieveDataWithEmailAndPassword(email, password).
  //       catch((e) => {
  //         alert(e);
  //         this.setState({loading: false});
  //       }).
  //       then((user) => {
  //         // this.setState({ loading: false})
  //         // if (user) alert('Your new account was created successfully');
  //       });
  // }

  render() {

    const {
      loginUserAction,
      createUserAction,
      updateUserEmailInput,
      updateUserPasswordInput,
      currentEmail,
      currentPassword,
    } = this.props;

    return (
        <View>
          <TextTag h1>
            Personalize sua experiência.
          </TextTag>
          <TextTag style={{marginBottom: 10}}>
            Preencha o formulário abaixo para entrar ou para criar uma nova
            conta
          </TextTag>
          <FormLabel labelStyle={{color: '#333'}}>Email</FormLabel>
          <FormInput
              value={currentEmail}
              onChangeText={email => updateUserEmailInput(email)}
              autoCorrect={false}
              textInputStyle={{color: '#333'}}
              autoCapitalize={'none'}/>
          <FormLabel labelStyle={{color: '#333'}}>Senha</FormLabel>
          <FormInput
              secureTextEntry
              value={currentPassword}
              textInputStyle={{color: '#333'}}
              onChangeText={password => updateUserPasswordInput(password)}
              containerStyle={{marginBottom: 15}}/>
          <Button
              raised
              title='Entrar'
              buttonStyle={{backgroundColor: 'black'}}
              onPress={loginUserAction}/>
          <TextTag h3 style={{
            marginTop: 10,
            marginBottom: 10,
            textAlign: 'center',
          }}>OU</TextTag>
          <Button
              title={'Criar uma nova conta'}
              color={'black'}
              buttonStyle={{backgroundColor: 'white'}}
              onPress={createUserAction}/>
        </View>
    );

  }
}

export default LoginForm;
