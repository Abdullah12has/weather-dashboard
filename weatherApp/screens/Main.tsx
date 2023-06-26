/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Box, Input, Button} from 'native-base';

const Main = () => {
  const [city, setCity] = useState('');
  const handleChange = () => setCity(city);

  // loading state
  const [loading, setloading] = useState(false);

  // Function logic to execute on button press
  const handlePress = () => {

    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 600);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weather Dashboard</Text>
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

        {loading === true ? (
          <Button
            isLoading
            spinnerPlacement="start"
            style={styles.button}
            onPress={handlePress}
          />
        ) : (
          <Button spinnerPlacement="start" style={styles.button}  onPress={handlePress}>
            Let's Go
          </Button>
        )}
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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

export default Main;
