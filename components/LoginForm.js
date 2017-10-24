import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import InputField from './InputField';

class LoginForm extends Component {
    state = { email: '', password: '', username: '', message: '', alert: '', loading: false};

    onLoginPress() {
        this.setState({ message: '', loading: true });
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ message: 'Successfully Signed In', alert:'success', loading: false }); })
            .catch(() => {
              this.setState({ loading: false, message: "Email/password Combination doesn't match", alert:'error' });
            });
    }

    render() {
        return (
            <View>
              <InputField
                  label='Email Address'
                  placeholder='you@domain.com'
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
              />
              <InputField
                  label='Password'
                  autoCorrect={false}
                  placeholder='*******'
                  secureTextEntry
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
              />
            </View>
        );
    }
}

export default LoginForm;
