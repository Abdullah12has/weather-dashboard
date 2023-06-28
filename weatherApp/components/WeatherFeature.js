import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const WeatherFeature = ({iconName, name, value}) => {
  return (

    <View style={styles.container}>
      <Image source={iconName} style={styles.icon} />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text2}>{value}</Text>
      
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
   
    flexDirection:'row',
    padding:'5%' ,
    paddingLeft:'8%' 
  },

  icon:{
    width:25,
    height:25,
    resizeMode: 'stretch',
    marginTop:2
  },
  text:{
    fontSize: 18,
    color: 'white',
    marginLeft:"3%",
    fontWeight:'bold',
    width:'50%',
    marginTop:3

  },
  text2:{
    fontSize: 20,
    color: 'white',
    marginLeft:"8%",
    fontWeight:'bold',
    marginTop:2

  },
 
});

export default WeatherFeature;
