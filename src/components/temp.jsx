// https://api.openweathermap.org/data/2.5/weather?q=agra&appid=65c2a36f1d3f86adcd200d20c9003d69

import React, { useState, useEffect } from 'react';
import WeatherCard from './weatherCard';
import './style.css';

const Temp = () => {
  const [searchValue, setSearchValue] = useState('agra');
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      // add API url
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=65c2a36f1d3f86adcd200d20c9003d69`;

      // fetching the data
      const response = await fetch(url);

      // converting the data to json format
      const data = await response.json();

      console.log(data);

      // getting different data from json
      const { temp, pressure, humidity } = data.main;
      // console.log(`Temp: ${temp},Pressure: ${pressure},Humidity: ${humidity}`);

      const [{ main }] = data.weather;
      const weatherMood = main;
      // console.log(weatherMood);

      const { name } = data;

      const { speed } = data.wind;

      const { country, sunset } = data.sys;

      // new object to store all the data in one place
      const myNewWeatherData = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherData);
    } catch (error) {
      console.log(error);
    }
  };

  // by default at first render, weather of Agra must be shown in app
  useEffect(() => {
    getWeatherInfo;
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>

      {/* our Weather Card */}
      <WeatherCard tempInfo={tempInfo}/>
    </>
  );
};

export default Temp;
