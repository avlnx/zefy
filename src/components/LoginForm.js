import React, {Component} from 'react';
import {View} from 'react-native';
import {TextTag} from './common';
import {
    FormLabel,
    Button,
    FormInput,
    Divider
} from 'react-native-elements';

class LoginForm extends Component {
    render() {
        return (
            <View>
                <TextTag h1>
                    Personalize sua experiência.
                </TextTag>
                <TextTag style={{ marginBottom: 10}}>
                    Preencha o formulário abaixo para entrar ou para criar uma nova conta
                </TextTag>
                <FormLabel>Email</FormLabel>
                <FormInput/>
                <FormLabel>Senha</FormLabel>
                <FormInput containerStyle={{marginBottom: 15}}/>
                <Button
                    raised
                    primary1
                    title='Entrar'/>
                <Divider />
                <TextTag style={{marginTop: 10, marginBottom: 10, textAlign: 'center'}}>OU</TextTag>
                <Button title={'Criar uma nova conta'} />
            </View>
        );
    }
}

export default LoginForm;
