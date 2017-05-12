var React = require('react')
var MapsService = require('../services/mapService.js')

var mapComponent = React.createClass({
  getInitialState: function () {
    return {
      geometry: null
    }
  },
  componentWillReceiveProps: function (props) {
    MapsService.getGeometry(props.address)
      .then(function (response) {
        var geometry = response.data.results.pop().geometry.location
        this.setState({ geometry: geometry })
      }.bind(this))
      .catch(function (err) {
        console.log(err)
      })
  },
  render: function () {
    var map = (this.state.geometry) ? (
      <div className="map">
        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.geometry.lat},${this.state.geometry.lng}&zoom=15&size=800x300&markers=color:red|${this.state.geometry.lat},${this.state.geometry.lng}&key=AIzaSyCdgu28FfY-xqOhemG_GrfWoyw_pTowD3M`} alt={this.props.address.street}/>
      </div>
    ) : (
      <div className="alert alert-danger">Ops, parece que houve algum problema</div>
    )

    return map
  }
})

mapComponent.propTypes = {
  address: React.PropTypes.object.isRequired
}

module.exports = mapComponent
