var React = require('react')

var addressSearchBar = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    this.props.updateZipCode(this.refs.zipcode.value)
  },
  render: function () {
    return (
      <section className="address-bar col-sm-12">
        <div className="jumbotron">
          <h2 className="row">Consultar</h2>
          <div className="row">
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="form-group col-sm-6">
                <label htmlFor="zipcode">CEP:
                  <input type="text" name="zipcode" required autoFocus placeholder="Ex: 02050-010" ref="zipcode" className="form-control"/>
                </label>
                <button type="submit" className="btn btn-primary ml">Buscar</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
})

addressSearchBar.propTypes = {
  updateZipCode: React.PropTypes.func.isRequired
}

module.exports = addressSearchBar
