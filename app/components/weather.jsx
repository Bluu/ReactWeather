const React = require('react');
const WeatherInfo = require('weather-info');
const WeatherForm = require('weather-form');
const OpenWeatherMap = require('open-weather-map');
const ErrorModal = require('error-modal');

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,

    }
  },
  handleSearch: function (location) {
    const that = this;

    this.setState({
      isLoading: true,
      errorMessage: null,
      location: null,
      temp: null
    });

    OpenWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        isLoading: false,
        location,
        temp
      });
    }, function (error) {
      that.setState({
        isLoading: false,
        errorMessage: error.message
      });
    });
  },
  componentDidMount: function () {
    const location = this.props.location.query.location;

    if (location && location.length) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    const location = newProps.location.query.location;

    if (location && location.length) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function () {
    const { isLoading, temp, location, errorMessage } = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherInfo temp={temp} location={location}/>;
      }
    }

    function renderError () {
      if (errorMessage) {
        return <ErrorModal message={errorMessage}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
