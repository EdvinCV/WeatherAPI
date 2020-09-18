import React from 'react';
// Weather Icons
import WeatherIcons from 'react-weathericons';
// Constants
import { CLOUD, CLOUDY, SUN, RAIN
    ,SNOW, WINDY, THUNDER, DRIZZLE} from '../../../constants/weather';
// Prop-types
import PropTypes from 'prop-types';
// CSS
import './style.css';

const stateToIconName = weather => {
    switch(weather) {
        case CLOUD:
            return 'cloud';
        case CLOUDY:
            return 'cloudy';
        case SUN:
            return 'day-sunny';
        case RAIN:
            return 'rain';
        case SNOW:
            return 'snow';
        case WINDY:
            return 'windy';
        case THUNDER:
            return 'day-thunderstorm';
        case DRIZZLE:
            return 'day-showers';
        default:
            return 'day-sunny';
        
    }
}

const getWeatherIcon = (weather) => {
    return (<WeatherIcons className="wicon" name={stateToIconName(weather)} size="4x" />);
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureContainer">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperaturetype">C°</span>
    </div>
)

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
}
export default WeatherTemperature;