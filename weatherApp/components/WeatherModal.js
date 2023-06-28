import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Box, Input, Button, Center} from 'native-base';
import WeatherFeature from './WeatherFeature';
import assets from '../assets';

const WeatherModal = ({low, high, humidity, wind, description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.desc1}>
        {description}. Low {low}°C.
      </Text>
      <View style={styles.line} />

      <WeatherFeature
        iconName={assets.wet}
        name={'Humidity'}
        value={`${humidity}%`}
      />
      <WeatherFeature
        iconName={assets.wind}
        name={'Wind Speed'}
        value={`${wind} Km/h`}
      />
      <WeatherFeature
        iconName={assets.temperature}
        name={'Max Temperature'}
        value={`${high}°C`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28A4F4',
    width: '94%',
    marginTop: '10%',
    height: '30%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  desc1: {
    fontSize: 14,
    color: 'white',
    marginTop: '5%',
    marginLeft: '5%',
    marginBottom: '3%',
    fontWeight: 'bold',
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 0.17,
    width: '90%',
    alignSelf: 'center',
    marginBottom: '3%',
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },
});

export default WeatherModal;
