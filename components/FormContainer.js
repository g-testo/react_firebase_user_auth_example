import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import InputField from './InputField';
import CreateForm from './CreateForm';
import LoginForm from './LoginForm';

class FormContainer extends Component {
    state = { email: '', password: '', username: '', message: '', alert: '', loading: false};
    render() {
        return (
            <View>
              <CreateForm />
              <Text style={this.state.alert === 'success' ? styles.successTextStyle : styles.errorTextStyle}>{this.state.message}</Text>
            </View>
        );
    }
}
const styles = {
    successTextStyle: {
        color: 'green',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default FormContainer;
