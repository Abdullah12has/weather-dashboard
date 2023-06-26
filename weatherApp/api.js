import axios from 'axios';
import { API_KEY } from '@env';


const fetchForecast = async (cityName) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const fetchCurrentData = async (cityName) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  
  export {fetchForecast, fetchCurrentData};