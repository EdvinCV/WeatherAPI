import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './style.css';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="weatherExtraInfoContainer">
        <span className="extraInfoText">Humedad: {humidity + `%`}</span>
        <span className="extraInfoText">Vientos: {wind}</span>
    </div>
)

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;