import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'react-native-firebase';
import {TextTag, Spinner } from './common';
import {
    FormLabel,
    Button,
    FormInput
} from 'react-native-elements';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            loading: false,
        };
    }

    loginUser() {
        const { email, password } = this.state;
        this.setState({ loading: true});
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
            .catch((e) => {
               alert(e);
               // alert('You messed up' + e + ' email: ' + email + ' password: ' + password);
               this.setState({ loading: false});
            })
            .then((user) => {
                // this.setState({ loading: false})
                // if (user) alert('Welcome! You are logged in now');
            })
    }

    createUser() {
        const { email, password } = this.state;
        this.setState({ loading: true});
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .catch((e) => {
                alert(e);
                // alert('Yo! Are you stupid?' + e + ' email: ' + email + ' password: ' + password);
                this.setState({ loading: false});
            })
            .then((user) => {
                // this.setState({ loading: false})
                // if (user) alert('Your new account was created successfully');
            });
    }

    render() {
        if (!this.state.loading)
            return (
                <View>
                    <TextTag h1>
                        Personalize sua experiência.
                    </TextTag>
                    <TextTag style={{ marginBottom: 10}}>
                        Preencha o formulário abaixo para entrar ou para criar uma nova conta
                    </TextTag>
                    <FormLabel labelStyle={{ color: '#333' }}>Email</FormLabel>
                    <FormInput
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        autoCorrect={false}
                        textInputStyle={{ color: '#333'}}
                        autoCapitalize={'none'}/>
                    <FormLabel labelStyle={{ color: '#333' }}>Senha</FormLabel>
                    <FormInput
                        secureTextEntry
                        value={this.state.password}
                        textInputStyle={{ color: '#333'}}
                        onChangeText={password => this.setState({ password })}
                        containerStyle={{marginBottom: 15}}/>
                    <Button
                        raised
                        title='Entrar'
                        buttonStyle={{ backgroundColor: 'black'}}
                        onPress={this.loginUser.bind(this)} />
                    <TextTag h3 style={{marginTop: 10, marginBottom: 10, textAlign: 'center'}}>OU</TextTag>
                    <Button
                        title={'Criar uma nova conta'}
                        color={'black'}
                        buttonStyle={{ backgroundColor: 'white'}}
                        onPress={this.createUser.bind(this)} />
                </View>
            );
        if (this.state.loading)
            return (
                <Spinner />
            );
    }
}

export default LoginForm;
