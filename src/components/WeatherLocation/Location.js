import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './style.css';

const Location = ({ city }) => {
    return (
        <div className="LocationContainer">
            <h1>{city}</h1>
        </div>
    );   
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
}
export default Location;