import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';


const HomePage = (props) => {
    return (
        <View>
          <Button onPress={ () => props._signOut() } title="Sign Out"></Button>
          <Text> {props.currentUser ? props.currentUser.email : '' } </Text>
          <Text> {props.currentUser ? props.currentUser.username : '' } </Text>
        </View>
    );
};

export default HomePage;
