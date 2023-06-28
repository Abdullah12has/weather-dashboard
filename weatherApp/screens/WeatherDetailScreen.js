/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import {Box, Input, Button} from 'native-base';
import {useRoute} from '@react-navigation/native';

const WeatherDetailScreen = () => {
  const route = useRoute();
  const {currentData} = route.params;

  useEffect(() => {
    console.log(currentData);
  });

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <View style={styles.containerLeft}>
            <Text style={styles.temperature}>32°</Text>
            <Text style={styles.description}>Partly Cloudy</Text>
            <Text style={styles.city}>Islamabad</Text>
            <Text style={styles.feelsLike}>32°/ 32° Feels like 32°</Text>
          </View>

          <Image source={require('../assets/clear.png')} style={styles.image} />
        </View>
        <Text>asasas</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#45b6fe',
  },
  containerTop: {
    flexDirection: 'row',
    justifyContent: 'left',
  },
  containerLeft: {
    paddingLeft: '8%',
    paddingTop: '7%',
    width:'50%'
  },
  temperature: {
    fontSize: 70,
    color: 'white',
  },
  description: {
    fontSize: 19,
    color: 'white',
  },

  box: {
    width: '80%',
    height: '80%',
    flex: 1,
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: 'stretch',
    marginVertical: '5%',
    marginLeft: '10%',
  },
  button: {
    width: '77%',
    justifyContent: 'center',
    marginTop: '90%',
  },
  safearea: {flex: 1, backgroundColor: '#45b6fe'},
  city: {
    fontSize: 16,
    color: 'white',
    marginTop: 25,
  },
  feelsLike: {
    fontSize: 13,
    color: 'white',
    marginTop: 5,
  },
});

export default WeatherDetailScreen;
