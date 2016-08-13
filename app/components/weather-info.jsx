const React = require('react');

const WeatherInfo = ({ temp, location }) => {
  return (
    <h1>Weather is {temp} in {location}</h1>
  );
};

module.exports = WeatherInfo
