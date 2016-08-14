const React = require('react');
const WeatherInfo = require('weather-info');
const WeatherForm = require('weather-form');
const OpenWeatherMap = require('open-weather-map');

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    const that = this;

    this.setState({
      isLoading: true
    });

    OpenWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        isLoading: false,
        location,
        temp
      });
    }, function (error) {
      that.setState({
        isLoading: false
      });
      alert(error);
    });
  },
  render: function () {
    const { isLoading, temp, location } = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherInfo temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
