import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const text  = "Hola 2";
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;