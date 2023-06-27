import axios from 'axios';
import {API_KEY} from '@env';

const fetchForecast = async (cityName, setCurrentData) => {
  try {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`,
      )
      .then(res => {
        setCurrentData(res.data);
      });
  } catch (error) {
    console.log(error);
  }
};

const fetchCurrentData = async cityName => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`,
    );
  } catch (error) {
    console.log(error);
  }
  return response;
};

export {fetchForecast, fetchCurrentData};
