import React from 'react';

// Components
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './style.css';

const WeatherData = ({ data }) => {

    const {temperature, weatherState, humidity, wind} = data;

    return (
        <div className="weatherDataContainer">
            <WeatherTemperature
                temperature={temperature}
                weatherState={weatherState}
            />
            <WeatherExtraInfo 
                humidity={humidity}
                wind={wind}
            />
        </div>
    );
}

export default WeatherData;