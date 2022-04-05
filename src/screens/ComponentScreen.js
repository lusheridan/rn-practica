import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const ComponentsScreen = () => {
    const name = "Lucia";
    return (<View>
    <Text style={styles.TextStyle1}>Getting started with React Native!</Text>
    <Text style={styles.TextStyle2}>My name is {name}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    TextStyle1: {
        fontSize: 45
    },
    TextStyle2: {
        fontSize: 20
    }
});

export default ComponentsScreen;