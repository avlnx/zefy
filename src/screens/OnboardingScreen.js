import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import firebase from 'react-native-firebase';

import { Container, Spinner, TextTag } from '../components/common';

export default class OnboardingScreen extends Component {

    constructor() {
        super();
        this.state = {
            signingOut: null,
        };
    }

    static navigationOptions = {
        title: 'Crie seu primeiro ponto de vendas',
    };

    signOut() {
        this.setState({ signingOut: true});
        firebase.auth().signOut()
            .catch((e) => {
                alert(e);
            })
            .then(() => {
                // alert('Bye bye now');
            });

    }

    render() {
        if (!this.state.signingOut) return (
            <Container>
                <View style={{ flex: 1, justifyContent: 'center'}}>
                    <TextTag h1>Olá!</TextTag>
                    <TextTag h2>Parece que você ainda não criou um ponto de vendas.</TextTag>
                </View>
                <Button
                    buttonStyle={{ backgroundColor: 'black'}}
                    style={{ marginBottom: 15}}
                    title={'Cadastrar meu primeiro ponto de vendas'} />
                <Button
                    transparent
                    color={'black'}
                    onPress={this.signOut.bind(this)}
                    title={'Sair'} />
            </Container>
        );
        if (this.state.signingOut) return (
            <Container>
                <Spinner />
            </Container>
        );
    }
}
