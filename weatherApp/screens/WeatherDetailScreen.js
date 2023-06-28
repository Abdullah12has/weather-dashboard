/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import {Box, Input, Button} from 'native-base';
import {useRoute} from '@react-navigation/native';
import WeatherModal from '../components/WeatherModal';

const WeatherDetailScreen = () => {
  const route = useRoute();
  const {currentData} = route.params;

  const feelsLike = Math.round(currentData.main.feels_like);
  const main = currentData.weather[0].main;
  const description = currentData.weather[0].description;
  const low = Math.round(currentData.main.temp_min);
  const high = Math.round(currentData.main.temp_max);
  const humidity = Math.round(currentData.main.humidity);
  const name = currentData.name;
  const temperature = Math.round(currentData.main.temp);
  const wind = currentData.wind.speed


  useEffect(() => {
    // console.log(currentData);
    console.log(wind)
  }, []);

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <View style={styles.containerLeft}>
            <Text style={styles.temperature}>
              {temperature}°
            </Text>
            <Text style={styles.description}>{main}</Text>
            <Text style={styles.city}>{name}</Text>
            <Text style={styles.feelsLike}>
              {low}°/ {high}° Feels like {feelsLike}°
            </Text>
          </View>

          <Image source={require('../assets/clear.png')} style={styles.image} />
        </View>
        <WeatherModal low={low} high={high}  humidity={humidity} wind={wind}  description={description} />
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
    width: '50%',
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
