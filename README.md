
Test React Native Project 

# WeatherApp

WeatherApp is a React Native mobile application designed to provide users with current weather updates for their chosen cities.

## Features

- Search for any city in the world.
- Fetches and displays real-time weather updates for the searched city.
- Provides detailed weather statistics including temperature, humidity, and wind speed.

## Getting Started


### Prerequisites

Make sure you have Node.js, yarn, and React Native CLI installed on your machine.

### Installation

1. Clone the repository:

```javascript
git clone https://github.com/Abdullah12has/weather-dashboard.git
```

2. Navigate into the project directory:

```javascript 
cd WeatherApp
```

3. Install the dependencies:

```javascript
yarn install
cd ios 
pod install
```

### Running the App on IOS


```javascript
yarn run ios
```

- To run the app on Android, run:

```javascript
yarn run android
```


## Built With

- [React Native](https://reactnative.dev/)  
- [Axios](https://github.com/axios/axios) 
- [OpenWeatherMap API](https://openweathermap.org/api) 

## Architecture
This is a simple mobile app that takes a user input from the user (city name). Checks the city name with the OpenWeatherMap API, if the city exists, it takes you to the next screen and shows you the returned data. If there is no match with the city name, it shows an error and asks you to try again. 
