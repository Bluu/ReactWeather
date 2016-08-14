const React = require('react');

const WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    const location = this.refs.location.value;

    if (location.length) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder="Enter city name"/>
          <input type="submit" className="button expanded hollow" value="Get Weather"/>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
