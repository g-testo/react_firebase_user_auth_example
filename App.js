import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Config from 'react-native-config';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import CreateForm from './components/CreateForm';
import HomePage from './components/HomePage';
import firebaseApiData from './config';


class App extends Component {
  state = { isLoggedIn:false };
    componentWillMount() {
        firebase.initializeApp({...firebaseApiData});
    }
    componentDidMount() {
        let listener = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ isLoggedIn: true })
                listener();
            } else {
                this.setState({ isLoggedIn: false })
                listener();
            }
        })
    }
    _signOut() {
      firebase.auth().signOut()
      this.setState({ isLoggedIn: false })
    }
    render() {
      let currentUser = firebase.auth().currentUser

      let ComponentToLoad;
      ComponentToLoad = this.state.isLoggedIn ? HomePage :CreateForm;
        return (
            <View style={styles.container}>
                <ComponentToLoad currentUser={currentUser} _signOut={this._signOut.bind(this)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});


export default App;
