/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  SafeAreaView
} from 'react-native';
import {Box, Input, Button, TextArea} from 'native-base';
import {fetchForecast, fetchCurrentData} from '../api';
import axios from 'axios';
import {API_KEY} from '@env';

const MainScreen = ({navigation}) => {
  const [city, setCity] = useState('');
  const handleChange = cityname => {
    setCity(cityname);
  };

  // loading state
  const [loading, setloading] = useState(false);

  // state to store weather data
  const [currentData, setCurrentData] = useState({});
  const [forecast, setForecast] = useState({});
  //error message
  const [errorMessage, setErrorMessage] = useState('');

  // handle button press
  const handlePress = async city => {
    setloading(true);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );

      // d is response data
      const d = response.data;
      setCurrentData(d);

      if (response.status === 200) {
        navigation.navigate('Weather Details', {currentData: currentData});
        setErrorMessage('');
      }
    } catch (error) {
      setErrorMessage(`Please enter a correct city!`);
    }

    setloading(false);
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <KeyboardAvoidingView style={styles.container}>
        <Image
          source={require('../assets/weather-icon.png')}
          style={styles.image}
        />
        <Box style={styles.box} alignItems="center">
          <Input
            value={city}
            w="80%"
            onChangeText={handleChange}
            placeholder="Enter City Name"
          />
          <Text style={styles.error}>{errorMessage}</Text>

          {loading === true ? (
            <Button
              isLoading
              spinnerPlacement="start"
              style={styles.button}
              onPress={() => {
                handlePress(city);
              }}
            />
          ) : (
            <Button
              spinnerPlacement="start"
              style={styles.button}
              onPress={() => {
                handlePress(city);
              }}>
              Let's Go
            </Button>
          )}
        </Box>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea:{flex: 1, backgroundColor: '#FFFFFF'},

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
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
  error: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
    marginVertical: '2%',
  },
});

export default MainScreen;
