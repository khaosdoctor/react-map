var React = require('react')
var AddressSearchBar = require('./addressSearchBar.js')
var SearchResult = require('./mapFrame.js')

var reactMap = React.createClass({
  getInitialState: function () {
    return {
      zipCode: null
    }
  },
  updateZipCode: function (code) {
    this.setState({ zipCode: code })
  },
  render: function () {
    return (
      <div className='container'>
        <h1 className='col-sm-12 text-center'>Consulta de Endereço</h1>
        <AddressSearchBar
          updateZipCode={this.updateZipCode}
        />
        <SearchResult
          zipcode={this.state.zipCode}
        />
      </div>
    )
  }
})

module.exports = reactMap
