/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Box, Input, Button} from 'native-base';

const WeatherDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>32°</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: '5%',
  },
  box: {
    width: '80%',
    height: '80%',
    flex: 1,
  },
  image: {
    width: '60%',
    height: '22%',
    resizeMode: 'stretch',
    marginVertical: '10%',
  },
  button: {
    width: '77%',
    justifyContent: 'center',
    marginTop: '90%',
  },
});

export default WeatherDetailScreen;
