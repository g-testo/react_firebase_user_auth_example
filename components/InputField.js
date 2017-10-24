import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';


const TitledInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

    const { containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text>{label.toUpperCase()}</Text>
            <TextInput
              value={value}
              autoCorrect={false}
              autoCapitalize = 'none'
              placeholder={placeholder}
              onChangeText={onChangeText}
              secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = {
    containerStyle: {
        height: 45,
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        borderColor: '#D4D4D4',
        borderBottomWidth: 1,
    }
};

export default TitledInput;
