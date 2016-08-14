const React = require('react');

const WeatherInfo = ({ temp, location }) => {
  return (
    <h3 className="text-center">Weather is {temp} in {location}</h3>
  );
};

module.exports = WeatherInfo
