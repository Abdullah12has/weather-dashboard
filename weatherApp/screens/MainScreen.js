/* eslint-disable prettier/prettier */


// This is the main screen where you add the name of the city and search
import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import {Box, Input, Button} from 'native-base';
import {fetchForecast, fetchCurrentData} from '../api';
import axios from 'axios';
import {API_KEY, API} from '@env';
import assets from '../assets';

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
        API + `weather?q=${city}&appid=${API_KEY}&units=metric`,
      );

      // d is response data
      const d = response.data;
      setCurrentData(d);

      // checking status of response, if it's correct, we have a valid city so we move to the next screen
      if (response.status === 200) {
        navigation.navigate('Weather', {currentData: d});
        setErrorMessage('');
      }
    } catch (error) {
      // Error message
      setErrorMessage(`Please enter a correct city!`);
    }
// loading spinner turned off
    setloading(false);
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <KeyboardAvoidingView style={styles.container}>
        <Image source={assets.thunder} style={styles.image} />
        <Box style={styles.box} alignItems="center">
          <Input
            value={city}
            w="80%"
            variant="rounded"
            onChangeText={handleChange}
            placeholder="Enter City Name"
          />
          <Text style={styles.error}>{errorMessage}</Text>

          {loading === true ? (
            <Button
              isLoading
              colorScheme="secondary"
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
  safearea: {flex: 1, backgroundColor: '#FFFFFF'},

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
    width: 150,
    height: 150,
    resizeMode: 'stretch',
    marginVertical: '10%',
    marginTop: '35%',
  },
  button: {
    width: '80%',
    justifyContent: 'center',
    marginTop: '80%',
    borderRadius: 25,
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
    marginVertical: '6%',
  },
});

export default MainScreen;
