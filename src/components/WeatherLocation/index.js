import React, { Component } from 'react';

// Transform Weather
import transformWeather from '../../services/transformWeather';
// PropTypes
import PropTypes from 'prop-types';
// Components
import Location from './Location';
import WeatherData from './WeatherData/';
// CSS
import './style.css';
// import { CircularProgress} from 'material-ui';
import CircularProgress from '@material-ui/core/CircularProgress';

class WeatherLocation extends Component { 

    constructor({city}){
        super();
        this.state = {
            data: null,
            city
        };
    }

    handleUpdateClick = async () => {
        const apiKey = '04103ce66a6a0cc7373e6119ad75662b';
        let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${apiKey}`;
        // Fetch
        let res = await fetch(urlWeather);
        let resultado = await res.json();

        const data = transformWeather(resultado);
        // Actualizar el estado
        this.setState({data});
    }
    
    componentDidMount(){
        this.handleUpdateClick();
    }

    render = () => {
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;
        return (
            <div className="weatherLocationContainer" onClick={() => onWeatherLocationClick(city)} >
                <Location
                    className="LocationContainer"
                    city={city}
                />
                {data ? 
                    <WeatherData 
                        data={data}
                    /> 
                :
                    <CircularProgress />
                }
                
                {/* <button onClick={this.handleUpdateClick}>
                    Actualizar
                </button> */}
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;