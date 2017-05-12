var React = require('react')
var MapsService = require('../services/mapService.js')
var GMaps = require('./mapComponent.js')

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
      show: true
    }
  },
  closeMap: function () {
    this.setState({ show: false })
  },
  componentWillReceiveProps: function (props) {
    MapsService.getInfoByCode(props.zipcode, function (err, data) {
      if (err) {
        console.log(err)
        this.setState({show:false})
      }
      else {
        this.setState({
          address: {
            street: data.logradouro + ' ' + data.complemento,
            neighbourhood: data.bairro,
            city: data.localidade,
            state: data.uf,
            zipcode: data.cep
          },
          show: true
        })
      }
    }.bind(this))
  },
  render: function () {
    var map = (this.state.address.street && this.state.show) ? (
      <section className='map-frame col-sm-12'>
        <div className='panel panel-default'>
          <button className='map-close btn btn-danger pull-right' onClick={this.closeMap} title='Fechar'>X</button>
          <div className='panel-body'>
            <address>
              <p className='street'><strong>{this.state.address.street}</strong></p>
              <p className='neighbourhood'>{this.state.address.neighbourhood}</p>
              <p className='city'>{this.state.address.city + ' - ' + this.state.address.state}</p>
              <p className='zipcode'>{this.state.address.zipcode}</p>
            </address>
            <figure>
              <GMaps
                address={this.state.address}
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
  zipcode: React.PropTypes.string.isRequired
}

module.exports = mapFrame
