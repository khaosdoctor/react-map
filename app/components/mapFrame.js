var React = require('react')
var MapsService = require('../services/mapService.js')
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

var mapFrame = React.createClass({
  getInitialState: function () {
    return {
      address: {
        street: null,
        neighbourhood: null,
        city: null,
        state: null
      },
      geometry: null
    }
  },
  closeMap: function () {
    this.setState(this.getInitialState());
  },
  componentWillReceiveProps: function(props) {
    console.log(MapsService.getInfoByCode(zipcode))
  },
  render: function () {
      var map = (this.props.zipcode) ? (
        <section className="map-frame col-sm-12">
          <div className="panel panel-default">
            <button className="map-close" onClick={this.closeMap} title="Fechar">X</button>  
            <div className="panel-body">
              <address>
                <p className="street"><h2>{this.state.address.street}</h2></p>
                <p className="neighbourhood">{this.state.address.neighbourhood}</p>
                <p className="city">{this.state.address.city + ' - ' + this.state.address.state}</p>
                <p className="zipcode">{this.props.zipcode}</p>
              </address>
              <figure>
                <GoogleMapLoader
                  containerElement={<div className="map-results" style={{ height: 500, width: '100%' }} />}
                  googleMapElement={
                    <GoogleMap defaultZoom={15} center={{ lat: this.state.geometry.lat, lng: this.state.geometry.lng }} >
                      <Marker position={{ lat: this.state.geometry.lat, lng: this.state.geometry.lng }} />
                    </GoogleMap>  
                  }
                />
              </figure>
            </div>
          </div>
        </section>
      ) : null
    
      return map
  }
})


mapFrame.propTypes = {
  zipcode: React.PropTypes.func.isRequired
}

export default mapFrame
