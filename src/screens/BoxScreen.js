import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
    <View style={styles.parentStyle}>
        <View style={styles.view1Style}/>
        <View style={styles.view2Style}/>
        <View style={styles.view3Style}/>
    </View>
    );
};

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    view1Style: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
    },
    view2Style: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    view3Style: {
        width: 50,
        height: 50,
        backgroundColor: 'purple',
    }
});

export default BoxScreen;

// ...StyleSheet.absoluteFillObject
