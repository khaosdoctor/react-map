var jsonp = require('jsonp')

var HOST = 'https://viacep.com.br/ws/';

var mapService = {
  getInfoByCode: function (zipcode, cb) {
    return jsonp(`${host}/${zipcode}/json`, null, function (err, data) {
      if (err) throw err
      else {
        return data
      }
    })
  },
  getGeometry: function (location) {
    return jsonp(`https://maps.googleapis.com/maps/api/geocode/json?address=${location.logradouro}-${location.bairro}-${location.localidade}`, null, function (err, data) {
      if (err) throw err
      else {
        return data
      }
    })
  }
}

module.exports = mapService
