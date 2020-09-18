import React from 'react';

class ForecastExtended extends React.Component {
    render() {
        const {city} = this.props;
        return (
            <h1>{city}</h1>
        );
    }
}

export default ForecastExtended;