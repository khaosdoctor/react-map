var React = require('react')
var MapsService = require('../services/mapService.js')
//import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

var mapFrame = React.createClass({
  getInitialState: function () {
    return {
      address: {
        street: null,
        neighbourhood: null,
        city: null,
        state: null,
        zipcode: null
      },
      geometry: null,
      show: this.props.show
    }
  },
  closeMap: function () {
    this.setState({ show: false })
  },
  componentWillReceiveProps: function(props) {
    MapsService.getInfoByCode(props.zipcode, function (err, data) {
      if (err) throw err
      else {
        this.setState({
          address: {
            street: data.logradouro + ' ' + data.complemento,
            neighbourhood: data.bairro,
            city: data.localidade,
            state: data.uf,
            zipcode: data.cep
          }
        }, this.getLocationGeometry)
      }
    }.bind(this))
  },
  getLocationGeometry: function () {
    MapsService.getGeometry(this.state.address, function (err, data) {
      if (err) throw err
      else {
        console.log(data)
      }
    }.bind(this))
  },
  render: function () {
      var map = (this.props.zipcode && this.state.show) ? (
        <section className="map-frame col-sm-12">
          <div className="panel panel-default">
            <button className="map-close" onClick={this.closeMap} title="Fechar">X</button>  
            <div className="panel-body">
              <address>
                <p className="street"><h2>{this.state.address.street}</h2></p>
                <p className="neighbourhood">{this.state.address.neighbourhood}</p>
                <p className="city">{this.state.address.city + ' - ' + this.state.address.state}</p>
                <p className="zipcode">{this.state.address.zipcode}</p>
              </address>
              <figure>
               
              </figure>
            </div>
          </div>
        </section>
      ) : null
    
      return map
  }
})


mapFrame.propTypes = {
  zipcode: React.PropTypes.string.isRequired
}

module.exports = mapFrame
