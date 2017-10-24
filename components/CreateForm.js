import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import InputField from './InputField';

class CreateForm extends Component {
    state = { email: '', password: '', username: '', message: '', alert: '', loading: false};

    renderButtonOrSpinner() {
        if (this.state.loading) {
            return (
              <View>
                <ActivityIndicator size="large" color="#00aa00" />
                <Text>Loading...</Text>
              </View>
            )
        }
        return <Button onPress={this.onSubmitPress.bind(this)} title="Create Account" />;
    }

    onSubmitPress() {
        this.setState({ message: '', loading: true });
        const { email, password, username } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => { this.setState({ message: 'Account created successfully', alert:'success', loading: false }); })
          // .then(() => { this.updateProfile({ undername: username }) })
          .catch(() => {
              this.setState({ message: 'Account creation failed.', alert:'error', loading: false });
        })
    }

    render() {
        return (
            <View>
              {/* <InputField
                  label='Username'
                  placeholder='TheDoctor'
                  value={this.state.username}
                  onChangeText={username => this.setState({ username })}
              /> */}
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
              { this.renderButtonOrSpinner() }
            </View>
        );
    }
}

export default CreateForm;
