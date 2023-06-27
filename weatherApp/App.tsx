import React from 'react';
import {SafeAreaView} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import MainScreen from './screens/MainScreen';
import WeatherDetailScreen from './screens/WeatherDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <SafeAreaView style={{flex: 1, backgroundColor: '#45b6fe'}}> */}
      <NativeBaseProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Search City" component={MainScreen} />
          <Stack.Screen
            name="Weather Details"
            component={WeatherDetailScreen}
            options={{
              headerStyle: {
                backgroundColor: '#45b6fe',
              },
            }}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}

export default App;
