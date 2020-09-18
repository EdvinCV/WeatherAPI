import React from 'react';

// Components
import WeatherLocation from '../components/WeatherLocation/';

const LocationList = ({cities, onSelectedLocation}) => {

    // const handleWeatherLocation = city => {
    //     onSelectedLocation(city);
    // }
    return ( 
        cities.map( (city) => {
            return(
                <WeatherLocation 
                    key={city}
                    city={city}
                    onWeatherLocationClick={onSelectedLocation}
                />
            );
        } )
    );
}

export default LocationList;