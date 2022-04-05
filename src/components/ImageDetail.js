import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const ImageDetail = ({title, score, imageSource}) => {
    return <View>
        <Image source={imageSource}/>
        <Text style={styles.text}> {title} </Text>
        <Text style={styles.textScore}> Image Score - {score} </Text>
        </View>
};

const styles = StyleSheet.create({
    text: {
      fontSize: 25,
    },
    textScore: {
        fontSize: 15,
      },
  });

export default ImageDetail;