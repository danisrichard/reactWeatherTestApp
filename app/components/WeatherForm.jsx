var React = require('react');
var PropTypes = React.PropTypes;

var  WeatherForm= React.createClass({
  onFormSubmit: function (e) {
      e.preventDefault();

      var location = this.refs.location.value;   //ez elkéri (1.)

      if(location.length > 0){
        this.refs.location.value = '';  //clear a value a placeholderben
        this.props.onSearch(location);
      }
  },


  render: function() {
    return (
      <div>
      <form onSubmit={this.onFormSubmit}>  {/* onSubmit -> submit button gombra meghívja a onFormSubmit function-t */}
                <input type="text" ref="location" placeholder="Enter City Name"/>  {/* Ezt 1. ami a ref tag között van, hatalmas */}
                <button>Submit</button>
      </form>
    </div>
    );
  }

});

module.exports = WeatherForm;
