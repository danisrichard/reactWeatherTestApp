var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>it's {temp} celsius in {location}.</h3>
  );
}

module.exports = WeatherMessage;
